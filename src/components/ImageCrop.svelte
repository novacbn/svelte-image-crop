<script context="module">
    /**
     * Represents the different states the editor can be in
     */
    export const CROP_STATE = {
        /**
         * Represents that the editor currently has an active crop
         */
        cropped: "STATE_CROPPED",

        /**
         * Represents that the editor currently has no actions performed
         */
        default: "STATE_DEFAULT",
    };

    /**
     *
     * @param {import('../util/math').IBounds} bounds
     * @returns {string}
     */
    const TEMPLATE_CSS_BOUNDS = (bounds) =>
        `left:${bounds.x}px;top:${bounds.y}px;width:${bounds.width}px;height:${bounds.height}px;`;

    /**
     *
     * @param {import('../util/math').IPoint} point
     * @returns {string}
     */
    const TEMPLATE_CSS_POINT = (point) => `${point.x}px ${point.y}px`;

    /**
     *
     * @param {import('../util/math').IRect} rect
     * @returns {string}
     */
    const TEMPLATE_CSS_CLIP_PATH = (rect) => {
        const {bottom, left, right, top} = rect;

        const top_left = TEMPLATE_CSS_POINT({x: left, y: top});
        const top_right = TEMPLATE_CSS_POINT({x: right, y: top});

        const bottom_left = TEMPLATE_CSS_POINT({x: left, y: bottom});
        const bottom_right = TEMPLATE_CSS_POINT({x: right, y: bottom});

        return `clip-path: polygon(${top_left}, ${bottom_left}, ${bottom_right}, ${top_right});`;
    };

</script>

<script>
    // TODO: JSDoc for events?

    // TODO: max width / height and ratios

    import {createEventDispatcher} from "svelte";

    import {use_drag} from "../actions/drag";
    import {crop_image} from "../util/image";
    import {get_bounds, get_rect, get_relative_point} from "../util/math";

    const dispatch = createEventDispatcher();

    /**
     * Represents the background non-modified instance of the image being cropped
     * @type {HTMLImageElement}
     */
    let image_element;

    /**
     * Represents if the end-user is currently dragging on the background image
     * @type {boolean}
     */
    let is_dragging = false;

    /**
     * Represents the point in 2D space relative to the image element where the end-user stopped dragging / last dragged to
     * @type {import('../util/math').IPoint | null}
     */
    let position_end = null;

    /**
     * Represents the point in 2D space relative to the image element where the end-user initially started dragging
     * @type {import('../util/math').IPoint | null}
     */
    let position_start = null;

    /**
     * Represents the input URL for the Image being edited
     *
     * @type {string}
     */
    export let src;

    function on_end() {
        is_dragging = false;
        if (!position_end || !position_start) return;

        if (position_start.x === position_end.x && position_start.y === position_end.y) {
            position_start = null;
            position_end = null;
        }
    }

    function on_start(point) {
        is_dragging = true;

        position_start = point;
        position_end = point;
    }

    function on_update(point) {
        position_end = point;
    }

    /**
     * Returns a copy of the currently loaded image as a `Blob`, but cropped to current selection
     *
     * @returns {Blob}
     */
    export async function get_cropped_blob() {
        const response = await fetch(src);
        const blob = await response.blob();

        if (_is_cropping) return crop_image(blob, _image_bounds);
        return blob;
    }

    /**
     * Returns if there is an active crop selection
     *
     * @returns {boolean}
     */
    export function is_cropping() {
        return _is_cropping;
    }

    /**
     * Removes the the currently active crop selection
     */
    export function reset() {
        position_end = null;
        position_start = null;
    }

    $: _is_cropping = position_end && position_start ? true : false;
    let _rect;
    $: {
        const old_rect = _rect;
        _rect = _is_cropping ? get_rect(position_start, position_end) : null;

        if (
            typeof old_rect !== typeof _rect ||
            old_rect?.bottom !== _rect?.bottom ||
            old_rect?.left !== _rect?.left ||
            old_rect?.right !== _rect?.right ||
            old_rect?.top !== _rect?.top
        ) {
            dispatch("state", {state: _rect === null ? CROP_STATE.default : CROP_STATE.cropped});
        }
    }

    $: _bounds = _rect ? get_bounds(_rect) : null;
    $: _clip_path = _rect ? TEMPLATE_CSS_CLIP_PATH(_rect) : "";
    $: _crop_bounds = _bounds ? TEMPLATE_CSS_BOUNDS(_bounds) : "";

    let _image_bounds;
    $: {
        if (image_element && position_end && position_start) {
            const from = {
                width: image_element.width,
                height: image_element.height,
            };

            const to = {
                width: image_element.naturalWidth,
                height: image_element.naturalHeight,
            };

            _image_bounds = get_bounds(
                get_relative_point(from, to, position_start),
                get_relative_point(from, to, position_end)
            );
        } else _image_bounds = null;
    }

    let _action;
    $: {
        if (image_element) {
            if (_action) {
                _action.destroy();
                _action = null;
            }

            _action = use_drag(image_element, {
                on_end,
                on_start,
                on_update,
            });
        }
    }

    // HACK: Need to investigate why parent element adds footer spacing
    let _max_height;
    $: {
        if (image_element) {
            image_element.addEventListener(
                "load",
                () => (_max_height = image_element ? `max-height:${image_element.height}px;` : "")
            );
        } else _max_height = "";
    }

</script>

<div
    class="image-crop"
    data-cropping={_is_cropping ? true : undefined}
    data-dragging={is_dragging ? true : undefined}
    style={_max_height}
>
    <img bind:this={image_element} class="image-crop-background" {src} />

    <div class="image-crop-preview">
        <img style={_clip_path} {src} />
        <div class="image-crop-selection" style={_crop_bounds}>
            {#if _image_bounds}
                {_image_bounds.width.toFixed()}x{_image_bounds.height.toFixed()}px
            {/if}
        </div>
    </div>
</div>

<style>
    .image-crop {
        position: relative;

        cursor: var(--image-crop-cursor-hover, se-resize);
        overflow: hidden;
    }

    .image-crop[data-dragging] {
        cursor: var(--image-crop-cursor-dragging, crosshair);
    }

    .image-crop,
    .image-crop-preview,
    .image-crop img {
        width: 100%;
    }

    .image-crop[data-cropping] > .image-crop-background {
        filter: var(--image-crop-background-filter-cropping, blur(1px) brightness(65%));
    }

    .image-crop:not([data-cropping]) > .image-crop-preview {
        opacity: 0;
    }

    .image-crop-preview {
        display: inline;
        position: absolute;

        left: 0;
        top: 0;

        pointer-events: none;
    }

    .image-crop-selection {
        display: flex;
        position: absolute;

        align-items: center;
        justify-content: center;

        box-sizing: border-box;

        border: var(--image-crop-selection-border, 6px dashed whitesmoke);
        color: var(--image-crop-selection-color, whitesmoke);

        font-family: var(--image-crop-selection-font-family, inherit);
        font-size: var(--image-crop-selection-font-size, 1rem);
        font-weight: var(--image-crop-selection-font-weight, 900);

        filter: var(--image-crop-selection-filter, drop-shadow(0px 0px 6px black));
    }

</style>

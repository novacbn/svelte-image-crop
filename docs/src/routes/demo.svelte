<script context="module">
    import {dev} from "$app/env";
    import {assets} from "$app/paths";

    // HACK: SvelteKit's base URL handling is really weird. Somethings it handles
    // fully, but for SSR / server assets it doesn't...?
    const DEFAULT_IMAGE_SRC = dev
        ? "/assets/images/jung-ho-park-sYiKL1JEOEk-unsplash.jpg"
        : `${assets}/assets/images/jung-ho-park-sYiKL1JEOEk-unsplash.jpg`;

</script>

<script>
    import {browser} from "$app/env";
    import {CROP_STATE, ImageCrop} from "@novacbn/svelte-image-crop";

    import CSSVariableInput from "../components/CSSVariableInput.svelte";

    let blob;
    let image_crop;

    let src = DEFAULT_IMAGE_SRC;
    let state = CROP_STATE.default;

    function on_clear_click(event) {
        image_crop.reset();
    }

    async function on_commit_click(event) {
        blob = await image_crop.get_cropped_blob();
        src = URL.createObjectURL(blob);

        image_crop.reset();
    }

    function on_reset_click(event) {
        if (src !== DEFAULT_IMAGE_SRC) URL.revokeObjectURL(src);

        blob = null;
        src = DEFAULT_IMAGE_SRC;

        image_crop.reset();
    }

    function on_state(event) {
        state = event.detail.state;
    }

</script>

{#if browser}
    <h2>Controls</h2>

    <ul>
        <li><code>mouse drag</code> / <code>touch drag</code> — Creates a crop selection</li>
        <li><code>mouse click</code> / <code>touch tap</code> — Resets crop selection</li>
    </ul>

    <ImageCrop bind:this={image_crop} {src} on:state={on_state} />

    <div class="grouped gapless">
        <button
            class="button secondary is-full-width"
            disabled={src === DEFAULT_IMAGE_SRC}
            on:click={on_reset_click}
        >
            reset
        </button>

        <button
            class="button error is-full-width"
            disabled={state === CROP_STATE.default}
            on:click={on_clear_click}
        >
            clear
        </button>

        <button
            class="button primary is-full-width"
            disabled={state === CROP_STATE.default}
            on:click={on_commit_click}
        >
            commit
        </button>
    </div>

    <br />

    <fieldset>
        <legend>Customize</legend>

        <p>
            <CSSVariableInput variable="--image-crop-cursor-dragging" default="crosshair" />
            <CSSVariableInput variable="--image-crop-cursor-hover" default="se-resize" />

            <br />

            <CSSVariableInput
                variable="--image-crop-background-filter-cropping"
                default="blur(1px) brightness(65%)"
            />

            <br />

            <CSSVariableInput
                variable="--image-crop-selection-border"
                default="4px dashed whitesmoke"
            />
            <CSSVariableInput variable="--image-crop-selection-color" default="whitesmoke" />
            <CSSVariableInput
                variable="--image-crop-selection-filter"
                default="drop-shadow(0px 0px 6px black)"
            />

            <br />

            <CSSVariableInput variable="--image-crop-selection-font-family" default="inherit" />
            <CSSVariableInput variable="--image-crop-selection-font-size" default="1rem" />
            <CSSVariableInput variable="--image-crop-selection-font-weight" default="900" />
        </p>
    </fieldset>

    <br />
{:else}
    <div class="card">
        <p>Your client currently does not support Javascript, or is otherwise disabled.</p>
    </div>
{/if}

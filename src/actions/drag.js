/**
 * Represents the options passable to [[use_drag]]
 *
 * @typedef {Object} IDragOptions
 * @property {() => void} [on_end]
 * @property {(point: import('../util/math').IPoint)} [on_start]
 * @property {(point: import('../util/math').IPoint)} [on_update]
 */

/**
 * Represents the Svelte Action handle returned from [[use_drag]]
 *
 * @typedef {Object} IDragHandle
 * @property {() => void} destroy
 * @property {(options: IDragOptions) => void} options
 */

/**
 * Represents a Svelte Action to specially handle end-user dragging relative to the dragged element
 *
 * @param {HTMLElement} element
 * @param {IDragOptions} options
 * @returns {IDragHandle}
 */
export function use_drag(element, options = {}) {
    let {on_end, on_start, on_update} = options;
    let is_dragging = false;

    /**
     *
     * @param {MouseEvent | TouchEvent} event
     * @returns {import('../util/math').IPoint}
     */
    function get_mouse_point(event) {
        // NOTE: Using `event instanceof TouchEvent` would be better, but
        // apparently Firefox doesn't define the global on Desktop? Or
        // at least, on non-touch enabled Desktop clients
        if (event.type === "touchmove" || event.type === "touchstart") {
            const bounds = element.getBoundingClientRect();
            const touch = event.touches[0];

            return {
                x: touch.clientX - bounds.x,
                y: touch.clientY - bounds.y,
            };
        }

        return {
            x: event.offsetX,
            y: event.offsetY,
        };
    }

    /**
     *
     * @param {MouseEvent | TouchEvent} event
     */
    function on_interact_start(event) {
        event.preventDefault();

        is_dragging = true;
        if (on_start) on_start(get_mouse_point(event));
    }

    /**
     *
     * @param {MouseEvent | TouchEvent} event
     */
    function on_interact_end(event) {
        event.preventDefault();

        is_dragging = false;
        if (on_end) on_end();
    }

    /**
     *
     * @param {MouseEvent | TouchEvent} event
     */
    function on_interact_move(event) {
        event.preventDefault();

        if (is_dragging && on_update) on_update(get_mouse_point(event));
    }

    /**
     *
     * @param {MouseEvent} event
     */
    function on_mouse_leave(event) {
        is_dragging = false;
    }

    element.addEventListener("touchstart", on_interact_start);
    element.addEventListener("mousedown", on_interact_start);

    element.addEventListener("touchend", on_interact_end);
    element.addEventListener("mouseup", on_interact_end);

    element.addEventListener("touchmove", on_interact_move);
    element.addEventListener("mousemove", on_interact_move);

    element.addEventListener("mouseleave", on_mouse_leave);

    return {
        destroy() {
            element.removeEventListener("touchstart", on_interact_start);
            element.removeEventListener("mousedown", on_interact_start);

            element.removeEventListener("touchend", on_interact_end);
            element.removeEventListener("mouseup", on_interact_end);

            element.removeEventListener("touchmove", on_interact_move);
            element.removeEventListener("mousemove", on_interact_move);

            element.removeEventListener("mouseleave", on_mouse_leave);
        },

        update(options = {}) {
            ({on_end, on_start, on_update} = options);
        },
    };
}

/**
 * Represents the intrinsic size of an item within 2D space
 *
 * @typedef {Object} IDimensions
 * @property {number} height
 * @property {number} width
 */

/**
 * Represents a point within 2D space
 *
 * @typedef {Object} IPoint
 * @property {number} x
 * @property {number} y
 */

/**
 * Represents the intrinsic size of a bounding box along with the starting position
 *
 * @typedef {IDimensions & IPoint} IBounds
 */

/**
 * Represents the four corners of a rectangle in 2D space, along their respective axises
 *
 * @typedef {Object} IRect
 * @property {number} bottom
 * @property {number} left
 * @property {number} right
 * @property {number} top
 */

/**
 * Returns the bounding box of two points or a rectangle in 2D space 
 * 
 * @param {IPoint | IRect} rect 
 * @param {IPoint} [end] 
 * @returns {IBounds}
 */
export function get_bounds(rect, end) {
    const {left, right, top, bottom} = end ? get_rect(rect, end) : (rect);

    return {
        x: left,
        y: top,

        width: right - left,
        height: bottom - top,
    };
}

/**
 * Returns the rectangle corners of two points in 2D space
 * 
 * @param {IPoint} start
 * @param {IPoint} end
 * @returns {IRect}
 */
export function get_rect(start, end) {
    const {x: start_x, y: start_y} = start;
    const {x: end_x, y: end_y} = end;

    return {
        left: Math.min(start_x, end_x),
        right: Math.max(start_x, end_x),

        top: Math.min(start_y, end_y),
        bottom: Math.max(start_y, end_y),
    };
}

/**
 * Returns and translates a point from one pair dimensions to another pair in 2D space
 * 
 * @param {IDimensions} from
 * @param {IDimensions} to
 * @param {IPoint} point
 * @returns {IPoint}
 */
export function get_relative_point(from, to, point) {
    const x_percent = point.x / from.width;
    const y_percent = point.y / from.height;

    return {
        x: to.width * x_percent,
        y: to.height * y_percent,
    };
}

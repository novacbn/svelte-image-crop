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
 * @returns {IBounds}
 */
export function get_bounds(rect) {
    const {left, right, top, bottom} = (rect);

    return {
        x: left,
        y: top,

        width: right - left,
        height: bottom - top,
    };
}

/**
 * Returns the rectangle corners of two points in 2D space, optionally applying a ratio
 *
 * @param {IPoint} start
 * @param {IPoint} end
 * @param {number} ratio - The ratio of the cropped area, will be only applied if the ratio is not false
 * @returns {IRect}
 */
export function get_rect(start, end, ratio) {
    const {x: start_x, y: start_y} = start;
    const {x: end_x, y: end_y} = end;

    let left, right;
    if (ratio) {
        let height = Math.max(start_y, end_y) - Math.min(start_y, end_y)
        let width = ratio * height

        left = (start_x < end_x) ? start_x : start_x - width;
        right = left + width;
    } else {
        left = Math.min(start_x, end_x);
        right = Math.max(start_x, end_x)
    }

    return {
        left: left,
        right: right,

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

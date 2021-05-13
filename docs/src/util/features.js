/**
 * Returns if `createImageBitmap` / `canvas.getContext("bitmaprenderer")` are supported
 * @returns {boolean}
 */
export function is_supported() {
    const canvas = document.createElement("canvas");
    const has_context =
        typeof canvas.getContext !== "undefined" && canvas.getContext("bitmaprenderer");

    canvas.remove();
    return typeof window.createImageBitmap !== "undefined" && has_context;
}

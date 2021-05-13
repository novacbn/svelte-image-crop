/**
 * Creates an off-screen `<canvas>` element to render an `ImageBitmap` as a `Blob` and return
 * @param {ImageBitmap} bitmap
 * @param {string} mimetype
 * @param {number} [quality]
 * @returns {Promise<Blob>}
 */
export function to_blob(bitmap, mimetype, quality = 1) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("bitmaprenderer");

        if (!context) {
            reject(
                new Error("bad dispatch to 'to_blob' (context of 'bitmaprenderer' unavailable)")
            );

            return;
        }

        canvas.width = bitmap.width;
        canvas.height = bitmap.height;
        context.transferFromImageBitmap(bitmap);

        canvas.toBlob(
            (blob) => {
                if (blob) resolve(blob);
                else reject(new Error("bad dispatch to 'to_blob' (failed to convert to blob)"));

                canvas.remove();
            },
            mimetype,
            quality
        );
    });
}

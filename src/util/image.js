import {to_blob} from "./bitmap";

/**
 * Crops the provided Blob of an image to specific image-relative rectangle corners
 * @param {Blob} blob
 * @param {import("./math").IBounds} bounds
 * @returns {Promise<Blob>}
 */
export async function crop_image(blob, bounds) {
    const {x, y, width, height} = bounds;

    const bitmap = await createImageBitmap(blob, x, y, width, height);
    blob = await to_blob(bitmap, blob.type);

    bitmap.close();
    return blob;
}

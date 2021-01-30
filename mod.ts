import { BitmapEncoder } from "./src/Encoder.ts";
import { BitmapDecoder, Buffer } from "./src/Decoder.ts";

export interface imageData {
    /** Image bitmap data */
    data: Buffer;
    /** Image width */
    width: number;
    /** Image height */
    height: number;
}

/**
 * Bitmap Encoder
 * @param imgData Image data
 * @param quality Quality
 */
export function Encoder(imgData: imageData, quality?: number): imageData {
    const encoder = new BitmapEncoder(imgData);
    const data = encoder.encode();

    return {
        data: data,
        width: imgData.width,
        height: imgData.height
    };
}

/**
 * Bitmap Decoder
 * @param bmpData Bitmap data
 */
export function Decoder(bmpData: Buffer | Uint8Array | ArrayBuffer | SharedArrayBuffer): BitmapDecoder {
    return new BitmapDecoder(Buffer.from(bmpData));
}

export {
    Buffer as BitmapBufferAPI,
    BitmapEncoder,
    BitmapDecoder
}
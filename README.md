# Bitmap
Bitmap Encoder/Decoder for Deno based on Node's **bmp-js**.

# Example

```js
// BitmapBufferAPI = Buffer | Decoder = Bitmap Decoder | Encoder = Bitmap Encoder
import { BitmapBufferAPI, Decoder, Encoder } from "https://deno.land/x/bitmap/mod.ts";

const data = Deno.readFileSync("./image.bmp");
const decoder = Decoder(BitmapBufferAPI.from(data));
const imgData = decoder.data;

for (let i = 0; i < imgData.length; i += 4) {
    const brightness = 0.34 * imgData[i] + 0.5 * imgData[i + 1] + 0.16 * imgData[i + 2];
    imgData[i] = brightness;
    imgData[i + 1] = brightness;
    imgData[i + 2] = brightness;
}

const bitmap = Encoder({
    data: imgData,
    width: decoder.width,
    height: decoder.height
});

Deno.writeFileSync("./edited.bmp", bitmap.data);
```
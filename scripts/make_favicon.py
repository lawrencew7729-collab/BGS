"""Generate BGS favicon set from the REAL brand logo (3D gold bolt + teal BGS).

Source: user-supplied img_635a5442266a.jpg (103x73, content bbox 91x48).
Approach chosen by owner: keep bolt+BGS horizontal lockup, fit inside a SQUARE
canvas with padding, so nothing is cropped.

Run: python scripts/make_favicon.py
"""
import os
from PIL import Image, ImageFilter

SRC = r"C:\Users\Lawrence PA\AppData\Local\hermes\cache\images\img_635a5442266a.jpg"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "icons")
os.makedirs(OUT, exist_ok=True)

# measured from source
CONTENT_BOX = (8, 14, 99, 62)   # x0,y0,x1,y1 — tight content, white background
PAD_RATIO = 0.13                # breathing room inside the square
BG = (255, 255, 255)


def base_logo():
    """Trimmed logo, white background, cleaned of jpeg ringing."""
    im = Image.open(SRC).convert("RGB").crop(CONTENT_BOX)
    # upscale first with LANCZOS so later downscales stay clean, then denoise
    return im


def square_canvas(im, size):
    """Fit the horizontal lockup inside a size x size square, centred, padded."""
    inner = int(size * (1 - 2 * PAD_RATIO))
    logo = im.copy()
    logo.thumbnail((inner, inner), Image.LANCZOS)
    canvas = Image.new("RGB", (size, size), BG)
    canvas.paste(logo, ((size - logo.width) // 2, (size - logo.height) // 2))
    return canvas


def main():
    base = base_logo()
    # work at high res so the 512/180 outputs are as smooth as the source allows
    hi = base.resize((base.width * 8, base.height * 8), Image.LANCZOS)
    hi = hi.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=3))

    sizes = {"favicon-16x16.png": 16, "favicon-32x32.png": 32,
             "favicon-48x48.png": 48, "apple-touch-icon.png": 180,
             "android-chrome-192x192.png": 192, "android-chrome-512x512.png": 512}
    cache = {}
    for name, sz in sizes.items():
        img = square_canvas(hi, sz)
        img.save(os.path.join(OUT, name))
        cache[sz] = img
        print("wrote", name, sz)

    # multi-res .ico at site root
    ico = square_canvas(hi, 256)
    ico.save(os.path.join(ROOT, "favicon.ico"),
             sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("wrote favicon.ico [16,32,48,64]")

    print("source content:", base.size)


if __name__ == "__main__":
    main()

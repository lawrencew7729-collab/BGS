"""Generate BGS favicon set from the HIGH-RES brand logo.

Source: user-supplied img_bfe1958975ac.jpg (767x534) — gold lightning bolt
+ gold-framed teal "BGS" letters. Replaces the earlier low-res (103x73) source.

Owner's chosen layout: keep the bolt+BGS horizontal lockup, fit inside a SQUARE
canvas with padding so nothing is cropped.

Run: python scripts/make_favicon.py
"""
import os
from PIL import Image, ImageFilter

SRC = r"C:\Users\Lawrence PA\AppData\Local\hermes\cache\images\img_bfe1958975ac.jpg"
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "icons")
os.makedirs(OUT, exist_ok=True)

PAD_RATIO = 0.12                # breathing room inside the square
BG = (255, 255, 255)
WHITE_CUTOFF = 232              # threshold for "is this a logo pixel"


def trimmed_logo():
    """Load source, trim surrounding white margin to the tight artwork bbox."""
    im = Image.open(SRC).convert("RGB")
    import numpy as np
    a = np.array(im).astype(int)
    nw = (a[:, :, 0] < WHITE_CUTOFF) | (a[:, :, 1] < WHITE_CUTOFF) | (a[:, :, 2] < WHITE_CUTOFF)
    ys, xs = np.nonzero(nw)
    return im.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))


def square_canvas(logo, size):
    """Centre the horizontal lockup inside a size x size white square."""
    inner = int(size * (1 - 2 * PAD_RATIO))
    l = logo.copy()
    l.thumbnail((inner, inner), Image.LANCZOS)
    canvas = Image.new("RGB", (size, size), BG)
    canvas.paste(l, ((size - l.width) // 2, (size - l.height) // 2))
    return canvas


def main():
    logo = trimmed_logo()
    print("trimmed source:", logo.size)

    # gentle sharpen so downscaling keeps the metal edges crisp
    hi = logo.filter(ImageFilter.UnsharpMask(radius=2, percent=45, threshold=3))

    sizes = {"favicon-16x16.png": 16, "favicon-32x32.png": 32,
             "favicon-48x48.png": 48, "apple-touch-icon.png": 180,
             "android-chrome-192x192.png": 192, "android-chrome-512x512.png": 512}
    for name, sz in sizes.items():
        square_canvas(hi, sz).save(os.path.join(OUT, name))
        print("wrote", name, sz)

    square_canvas(hi, 256).save(os.path.join(ROOT, "favicon.ico"),
                                sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
    print("wrote favicon.ico [16,32,48,64]")


if __name__ == "__main__":
    main()

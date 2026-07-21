import sharp from 'sharp';
import path from 'path';

/**
 * Validates and optimizes an uploaded image buffer:
 *  - re-encodes through sharp (rejects non-images / malicious payloads)
 *  - respects EXIF orientation, then strips metadata
 *  - resizes to max 1920px (no upscaling)
 *  - converts to WebP for smaller file size
 *
 * Returns the generated filename (written into `destDir`).
 * Throws if the buffer is not a valid image.
 */
export async function processImage(
  buffer: Buffer,
  destDir: string,
  prefix = ''
): Promise<string> {
  const filename = `${prefix}${Date.now()}-${Math.round(Math.random() * 1e6)}.webp`;
  const outPath = path.join(destDir, filename);

  await sharp(buffer)
    .rotate() // apply EXIF orientation before stripping metadata
    .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(outPath);

  return filename;
}

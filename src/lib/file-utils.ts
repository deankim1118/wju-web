type CatalogFile =
  | { url?: string | null; filename?: string | null }
  | number
  | null
  | undefined;

export function getPdfUrl(file: CatalogFile): string | null {
  if (!file || typeof file === 'number') return null;
  const url = file.url;
  return typeof url === 'string' && url.length > 0 ? url : null;
}

export function getPdfFilename(file: CatalogFile): string {
  if (!file || typeof file === 'number') return 'catalog.pdf';
  const name = file.filename;
  return typeof name === 'string' && name.length > 0 ? name : 'catalog.pdf';
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function withBasePath(url: string): string {
  if (!url) return url;

  // Leave absolute URLs and data URIs untouched.
  if (/^(?:[a-z]+:)?\/\//i.test(url) || url.startsWith('data:')) {
    return url;
  }

  if (!url.startsWith('/') || !basePath) {
    return url;
  }

  if (url === basePath || url.startsWith(`${basePath}/`)) {
    return url;
  }

  return `${basePath}${url}`;
}

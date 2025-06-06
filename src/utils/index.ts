export function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

export function getImagePath(imagePath: string) {
  const clouddinaryBaseUrl = "https://res.cloudinary.com";
  if (imagePath.startsWith(clouddinaryBaseUrl)) {
    return imagePath;
  } else {
    return `/products/${imagePath}.jpg`;
  }
}

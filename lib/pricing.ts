export const philippinePesoFormatter = new Intl.NumberFormat("en-PH", {
  currency: "PHP",
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,
  style: "currency",
});

export function formatPrice(amount: number) {
  return philippinePesoFormatter.format(amount);
}

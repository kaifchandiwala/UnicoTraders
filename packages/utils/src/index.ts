/**
 * Convert paise (integer/bigint) to formatted Indian Rupee string (e.g. 50000 -> ₹500.00)
 */
export function formatCurrencyToRupees(paise: number | bigint): string {
  const amount = Number(paise) / 100;
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 2,
  }).format(amount);
}
/**
 * Format a date range for display (e.g. "Jan 1, 2024 – Mar 15, 2024").
 */
export function formatDateRange(
  startDate: string,
  endDate?: string | null,
): string {
  const start = new Date(startDate);
  const format = (d: Date) =>
    d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });

  if (!endDate || endDate === startDate) {
    return format(start);
  }
  const end = new Date(endDate);
  return `${format(start)} – ${format(end)}`;
}

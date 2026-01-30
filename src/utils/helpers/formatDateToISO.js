export function formatDateToISO(dateStr) {
  if (!dateStr) return '';

  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) {
    return dateStr;
  }

  const parts = dateStr.split('.');
  if (parts.length === 3) {
    const [day, month, year] = parts;
    const isoDay = day.padStart(2, '0');
    const isoMonth = month.padStart(2, '0');
    return `${year}-${isoMonth}-${isoDay}`;
  }

  return '';
}

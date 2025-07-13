export const formatBytesToMB = (bytes: number, fractionDigits = 3): string => {
  if (!bytes || isNaN(bytes)) return '0MB';
  const mb = bytes / (1024 * 1024);
  return `${mb.toFixed(fractionDigits)}MB`;
};

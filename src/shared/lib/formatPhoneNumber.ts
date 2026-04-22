export const formatPhoneNumber = (phone?: string | null): string => {
  if (!phone) return '-';

  const clean = phone.replace(/[^\d*]/g, '');

  if (clean.startsWith('7') && clean.length >= 7) {
    const part1 = clean.slice(1, 4);
    const part2 = clean.slice(4, 7);
    const part3 = clean.slice(7, 9);
    const part4 = clean.slice(9);

    if (clean.includes('*')) {
      return `+7 (${part1}) ${part2} ${part3}${part4 ? ' ' + part4 : ''}`.trim();
    }

    return `+7 (${part1}) ${part2} ${part3} ${part4}`.trim();
  }

  return phone;
};

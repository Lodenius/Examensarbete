export const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned: string = phoneNumber.replace(/\D/g, '');
    const match: RegExpMatchArray | null = cleaned.match(/^(\d{3})(\d{3})(\d{2})(\d{2})$/);
    if (match) {
        return `${match[1]}-${match[2]} ${match[3]} ${match[4]}`;
    }
    return phoneNumber;
};
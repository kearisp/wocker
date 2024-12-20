export const isNewByDate = (dateStr: string) => {
    const date = new Date(dateStr);

    return date > new Date();
};

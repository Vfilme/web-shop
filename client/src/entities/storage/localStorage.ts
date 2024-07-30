export const getLSData: <T>(key: string) => T | null = (key) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
};

export const setLSData = <T>(key: string, value: T): void => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
};

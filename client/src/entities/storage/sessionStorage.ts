export const getSSData = <T>(key: string): T | null => {
    const data = sessionStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
};

export const setSSData = <T>(key: string, value: T): void => {
    const data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
};

export const getSSData = <T>(key: string): T | null => {
    const data = sessionStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
};

export const setSSData = (key: string, value: unknown): void => {
    const data = JSON.stringify(value);
    sessionStorage.setItem(key, data);
};

export const getLSData: <T>(key: string) => T | null = (key) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
};

export const setLSData = (key: string, value: unknown): void => {
    const data = JSON.stringify(value);
    localStorage.setItem(key, data);
};

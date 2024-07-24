interface IURLParams {
    value: string;
    key: string;
}

export const getURLParams = (urlParams: any) => {
    let url = '';
    (urlParams as IURLParams[]).forEach((value, key) => {
        url += `${key}=${value}&`;
    });
    return url;
};

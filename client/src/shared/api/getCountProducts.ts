import axios from 'axios';
import { URLS } from '../const/const';

export const getCountProducts = async (params: string) => {
    const url = `${URLS.URL_SERVER}products/count/?${params}`;
    try {
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};

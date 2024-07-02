import axios from 'axios';

export const getServerData = async (URL: string) => {
    const { data } = await axios.get(URL);
    return data;
};

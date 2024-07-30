import axios from 'axios';

export const getServerData = async (URL: string) => {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (error) {
        console.log(error);
    }
};

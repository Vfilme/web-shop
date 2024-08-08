import { getServerData } from '../../../shared/api/getServerData';
import { URLS } from '../../../shared/const/const';

export const setPriceRange = async (
    setValue: (value: number[]) => void,
    setAvailableNumbers: (value: number[]) => void,
    searchParams: URLSearchParams,
) => {
    const params = new URLSearchParams(searchParams.toString());

    const response = await getServerData(
        `${URLS.URL_SERVER}${URLS.URL_PRODUCTS_PRICE_RANGE}`,
    );
    if (response?.minPrice && response?.maxPrice) {
        const { minPrice, maxPrice } = response;
        if (!params.has('min_price')) {
            setValue([minPrice, maxPrice]);
        }
        if (!params.has('max_price')) {
            setValue([minPrice, maxPrice]);
        } else {
            setValue([
                Number(params.get('min_price')),
                Number(params.get('max_price')),
            ]);
        }
        setAvailableNumbers([minPrice, maxPrice]);
    }
};

import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { CustomSlider, theme } from './config/settingsSlider';
import { useSearchParams } from 'react-router-dom';
import { URLS } from '../../../entities/const/const';
import { getServerData } from '../../../entities/scripts/serverScripts';
import './priceRange.scss';

export const PriceRange: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [availableNumbers, setAvailableNumbers] = useState<number[]>([
        0, 10000,
    ]);

    const [value, setValue] = useState<number[]>([
        parseFloat(searchParams.get('min_price') as string),
        parseFloat(searchParams.get('max_price') as string),
    ]);

    useEffect(() => {
        const fun = async () => {
            const { minPrice, maxPrice } = await getServerData(
                `${URLS.URL_SERVER}${URLS.URL_PRODUCTS_PRICE_RANGE}`,
            );
            if (!searchParams.has('min_price')) {
                setValue([minPrice, maxPrice]);
            }
            if (!searchParams.has('max_price')) {
                setValue([minPrice, maxPrice]);
            }
            setAvailableNumbers([minPrice, maxPrice]);
        };
        fun();
    }, [searchParams]);

    const changePriceRange = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set('min_price', `${value[0]}`);
        params.set('max_price', `${value[1]}`);
        setSearchParams(params);
    };
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const handleInputChange =
        (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseFloat(event.target.value);
            if (!isNaN(newValue)) {
                const newValues = [...value];
                newValues[index] = newValue;
                setValue(newValues);
            }
        };
    return (
        <div className="price-range">
            <p>Price</p>
            <ThemeProvider theme={theme}>
                <CustomSlider
                    value={value}
                    onChange={handleChange}
                    onMouseUp={() => {
                        changePriceRange();
                    }}
                    valueLabelDisplay="auto"
                    min={availableNumbers[0]}
                    max={availableNumbers[1]}
                />
            </ThemeProvider>
            <div>
                <span>от</span>
                <input
                    type="number"
                    onChange={handleInputChange(0)}
                    value={value[0]}
                    onBlur={() => {
                        changePriceRange();
                    }}
                />
                <span>до</span>
                <input
                    type="number"
                    value={value[1]}
                    onChange={handleInputChange(1)}
                    onBlur={() => {
                        changePriceRange();
                    }}
                />
            </div>
        </div>
    );
};

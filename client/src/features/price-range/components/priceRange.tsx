import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { CustomSlider, theme } from '../config/settingsSlider';
import { useSearchParams } from 'react-router-dom';
import './priceRange.scss';
import { handleInputChange } from '../model/handleInputChange';
import { setPriceRange } from '../model/setPriceRange';
import { changePriceRange } from '../model/changePriceRange';
import Skeleton from 'react-loading-skeleton';

export const PriceRange: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [availableNumbers, setAvailableNumbers] = useState<number[] | null>(
        null,
    );
    const minPrice: string | null = searchParams.get('min_price');
    const maxPrice: string | null = searchParams.get('max_price');
    const [value, setValue] = useState<number[] | null>(null);
    useEffect(() => {
        setPriceRange(setValue, setAvailableNumbers, searchParams);
    }, [minPrice, maxPrice]);

    const handleChange = (event: Event, newValue: number[] | number) => {
        setValue(newValue as number[]);
    };

    return (
        <div className="price-range">
            <p>Price</p>
            {(availableNumbers && value && (
                <>
                    <ThemeProvider theme={theme}>
                        <CustomSlider
                            value={value}
                            onChange={handleChange}
                            onMouseUp={() => {
                                changePriceRange(
                                    searchParams,
                                    setSearchParams,
                                    value,
                                );
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
                            onChange={handleInputChange(0, value, setValue)}
                            value={value[0]}
                            onBlur={() => {
                                changePriceRange(
                                    searchParams,
                                    setSearchParams,
                                    value,
                                );
                            }}
                        />
                        <span>до</span>
                        <input
                            type="number"
                            value={value[1]}
                            onChange={handleInputChange(1, value, setValue)}
                            onBlur={() => {
                                changePriceRange(
                                    searchParams,
                                    setSearchParams,
                                    value,
                                );
                            }}
                        />
                    </div>
                </>
            )) || <Skeleton height={100} />}
        </div>
    );
};

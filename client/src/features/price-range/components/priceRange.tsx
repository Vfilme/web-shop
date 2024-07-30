import { ThemeProvider } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import { CustomSlider, theme } from '../config/settingsSlider';
import { useSearchParams } from 'react-router-dom';
import './priceRange.scss';
import { handleInputChange } from '../model/handleInputChange';
import { setPriceRange } from '../model/setPriceRange';

export const PriceRange: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [availableNumbers, setAvailableNumbers] = useState<number[]>([0, 0]);
    const [value, setValue] = useState<number[]>([
        parseFloat(searchParams.get('min_price') as string),
        parseFloat(searchParams.get('max_price') as string),
    ]);

    useEffect(() => {
        setPriceRange(setValue, setAvailableNumbers, searchParams);
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
                    max={availableNumbers[1] | Number.MAX_VALUE}
                />
            </ThemeProvider>
            <div>
                <span>от</span>
                <input
                    type="number"
                    onChange={handleInputChange(0, value, setValue)}
                    value={value[0]}
                    onBlur={() => {
                        changePriceRange();
                    }}
                />
                <span>до</span>
                <input
                    type="number"
                    value={value[1]}
                    onChange={handleInputChange(1, value, setValue)}
                    onBlur={() => {
                        changePriceRange();
                    }}
                />
            </div>
        </div>
    );
};

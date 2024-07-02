import React, { useEffect, useState } from 'react';
import './sideBar.scss';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { getData } from '../../../app/store/catalog/actions';
import { useDispatch } from 'react-redux';

const theme = createTheme({
    palette: {
        primary: {
            main: '#8A2BE2', // Пример основного цвета
        },
    },
});

const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.primary.main, // Основной цвет ползунков
    height: 5, // Высота ползунков
    '& .MuiSlider-thumb': {
        height: 16, // Высота "ручки" ползунков
        width: 16, // Ширина "ручки" ползунков
        backgroundColor: 'white', // Цвет "ручки" ползунков
        border: '2px solid blueviolet', // Обводка "ручки" ползунков
        marginTop: 0, // Смещение "ручки" ползунков
        marginLeft: 0, // Смещение "ручки" ползунков
        '&:hover, &.Mui-focusVisible': {
            boxShadow: `0px 0px 0px 0px grey`,
        },
        '&.Mui-active': {
            boxShadow: `0px 0px 0px 0px grey`,
        },
    },
    '& .MuiSlider-track': {
        height: 1, // Высота трека
        borderRadius: 4, // Скругление углов трека
    },
    '& .MuiSlider-rail': {
        height: 2, // Высота основы трека
        borderRadius: 5, // Скругление углов основы трека
    },
    '& .MuiSlider-valueLabel': {
        // left: 'calc(-50% - 4px)', // Положение метки значения
        display: 'none',
    },
}));

const URL_MIN_MAX_PRICE = (min: number, max: number): string => {
    return `http://localhost:3000/api/products/price-range?minPrice=${min}&maxPrice=${max}`;
};

export const SideBar: React.FC = () => {
    const dispatch = useDispatch();
    const [[mini, maxi], setMiniMaxi] = useState<number[]>([0, 1200]);
    const [value, setValue] = useState<number[]>([0, 0]); // начальной значение на треке
    const [inputValue, setInputValue] = useState<string[]>([
        // начальноей значение в ячейках
        `${1000}`,
        `${8000}`,
    ]);
    useEffect(() => {
        const minMax = async () => {
            const mM = await fetch(
                'http://localhost:3000/api/products/min-max-price',
            );
            const { minPrice, maxPrice } = await mM.json();
            setValue([minPrice, maxPrice]);
            setInputValue([`${minPrice}`, `${maxPrice}`]);
            setMiniMaxi([minPrice, maxPrice]);
        };
        minMax();
    }, []);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        setInputValue(
            Array.isArray(newValue) ? newValue.map(String) : [String(newValue)],
        );
    };

    const handleInputChange =
        (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = parseFloat(event.target.value);
            if (!isNaN(newValue)) {
                const newValues = [...value];
                newValues[index] = newValue;
                setValue(newValues);
                setInputValue(newValues.map(String));
            }
        };

    return (
        <ThemeProvider theme={theme}>
            <div className="sideBar">
                <span>Цена</span>
                <CustomSlider
                    value={value}
                    onChange={handleChange}
                    onMouseUp={() => {
                        dispatch(
                            getData(1, URL_MIN_MAX_PRICE(value[0], value[1])),
                        );
                    }}
                    valueLabelDisplay="auto"
                    min={mini}
                    max={maxi}
                />
                <div className="wrapperInput">
                    <span>от</span>
                    <input
                        type="number"
                        onChange={handleInputChange(0)}
                        value={inputValue[0]}
                        onBlur={() => {
                            dispatch(
                                getData(
                                    1,
                                    URL_MIN_MAX_PRICE(value[0], value[1]),
                                ),
                            );
                        }}
                    />
                    <span>до</span>
                    <input
                        type="number"
                        value={inputValue[1]}
                        onChange={handleInputChange(1)}
                        onBlur={() => {
                            dispatch(
                                getData(
                                    1,
                                    URL_MIN_MAX_PRICE(value[0], value[1]),
                                ),
                            );
                        }}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

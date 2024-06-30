import React, { useState } from 'react';
import './sideBar.scss';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';

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

export const SideBar: React.FC = () => {
    const [value, setValue] = useState<number[]>([2000, 8000]);
    const [inputValue, setInputValue] = useState<string[]>(['2000', '8000']);

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
                    valueLabelDisplay="auto"
                    min={0}
                    max={10000}
                />
                <div className="wrapperInput">
                    <span>от</span>
                    <input
                        type="number"
                        onChange={handleInputChange(0)}
                        value={inputValue[0]}
                    />
                    <span>до</span>
                    <input
                        type="number"
                        value={inputValue[1]}
                        onChange={handleInputChange(1)}
                    />
                </div>
            </div>
        </ThemeProvider>
    );
};

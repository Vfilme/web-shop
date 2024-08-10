import { createTheme } from '@mui/material';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/system';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#000', // Пример основного цвета
        },
    },
});

export const CustomSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.primary.main, // Основной цвет ползунков
    height: 5, // Высота ползунков
    '& .MuiSlider-thumb': {
        height: 16, // Высота "ручки" ползунков
        width: 16, // Ширина "ручки" ползунков
        backgroundColor: 'white', // Цвет "ручки" ползунков
        border: '2px solid #000', // Обводка "ручки" ползунков
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

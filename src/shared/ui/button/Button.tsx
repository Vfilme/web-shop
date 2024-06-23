import React from 'react';
import './button.scss';

interface IProps {
    children: string;
    onClick?: () => void;
}

export const Button: React.FC<IProps> = ({ children, onClick }) => {
    return (
        <button className="classic_button" onClick={onClick}>
            {children}
        </button>
    );
};

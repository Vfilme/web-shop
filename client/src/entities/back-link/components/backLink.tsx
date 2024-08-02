import React from 'react';
import { useNavigate } from 'react-router-dom';
import './backLink.scss';

export const BackLink = () => {
    const navigate = useNavigate();
    return (
        <button
            className="backLink"
            onClick={() => {
                navigate(-1);
            }}
        >
            go back
        </button>
    );
};

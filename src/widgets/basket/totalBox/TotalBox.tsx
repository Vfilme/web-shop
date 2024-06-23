import React from 'react';
import { Button } from '../../../shared/ui/button/Button';
import { cleanBasket } from '../../../entities/components/ui/button/scripts/systemBasket';
import { IProps } from './types';
import './totalBox.scss';

export const TotalBox: React.FC<IProps> = ({ fun }) => {
    return (
        <div className="totalBox">
            <Button>оформить</Button>
            <Button
                onClick={() => {
                    cleanBasket();
                    fun();
                }}
            >
                {/* setUpdate(!update) */}
                удалить всё
            </Button>
        </div>
    );
};

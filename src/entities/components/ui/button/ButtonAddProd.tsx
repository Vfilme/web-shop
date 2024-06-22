import React from "react";
import { IBasket } from "./types";
import { addProdBasket } from "./scripts/systemBasket";
import { Button } from '../../../../shared/ui/button/Button';

export const ButtonAddProd: React.FC<IBasket> = (props) => {
    return (
        <Button onClick={()=>{addProdBasket(props)}}>
            добавить
        </Button>
    )
}
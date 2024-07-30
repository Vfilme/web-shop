import { IProducts } from '../../../app/store/catalog/types';
import { ReadonlyProps } from '../../../shared/types';

interface IProps {
    el: IProducts;
    children: JSX.Element;
    key?: number;
}

export type ReadonlyComponentProps = ReadonlyProps<IProps>;

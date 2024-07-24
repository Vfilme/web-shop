import { IProducts } from '../../../app/store/catalog/types';
import { ReadonlyProps } from '../../../shared/types';

interface IProps {
    el: IProducts;
    key?: number;
}

export type ReadonlyComponentProps = ReadonlyProps<IProps>;

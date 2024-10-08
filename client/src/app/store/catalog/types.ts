import { TStatusLoading } from '../../../shared/types/statusLoading';

export interface IStateCatalog {
    products: Array<IProducts>;
    status: TStatusLoading;
}

export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: {
        id: number;
        name: string;
        image: string;
        creationAt: string;
        updatedAt: string;
    };
    rating: number;
    count?: number;
}

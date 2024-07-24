export interface IStateCatalog {
    products: Array<IProducts>;
    status: string;
}

export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    count?: number;
}

export interface ICardBasket {
    image: string;
    title: string;
    id: number;
    rating: number;
    price: number;
    count: number;
    category: string;
}

export interface IBasket {
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
    count: number;
}

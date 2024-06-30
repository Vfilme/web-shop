import { Countable } from './types';

export const getCountArrayObjects = <T extends Countable>(
    array: Array<T>,
): number => {
    return array.reduce((sum: number, el: T) => {
        return sum + el.count;
    }, 0);
};

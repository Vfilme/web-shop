import { IId } from './types';

// remove Element from Array by Id remElArId([{id:1},{id:2},{id:3}], 2) --> [{id:1},{id:3}]
export const remElArId = <typeEl extends IId>(
    m: Array<typeEl>,
    id: number,
): Array<typeEl> => {
    return m.filter((e) => {
        return e.id != id;
    });
};

// createMassiveFromNumber(3) --> [1,2,3]
export const createMassiveFromNumber: (n: number) => Array<number> = (n) => {
    const massive = [];
    for (let i = 1; i < n + 1; i++) {
        massive.push(i);
    }
    return massive;
};

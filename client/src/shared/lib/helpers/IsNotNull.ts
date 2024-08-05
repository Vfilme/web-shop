export const isNotNull = <T>(entity: T | null): entity is T => {
    return entity !== null;
};

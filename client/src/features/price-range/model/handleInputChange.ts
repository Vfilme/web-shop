export const handleInputChange =
    (index: number, value: number[], setValue: (newValue: number[]) => void) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = parseFloat(event.target.value);
        if (!isNaN(newValue)) {
            const newValues = [...value];
            newValues[index] = newValue;
            setValue(newValues);
        }
    };

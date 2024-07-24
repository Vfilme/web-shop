export const cutSentence = (
    sentence: string,
    maxCountWorld: number,
    maxCountLetters: number,
): string => {
    const worlds = sentence.split(' ');
    const countWorlds = worlds.length;
    const listCountLetters = worlds.map((el) => {
        return el.length;
    });
    const checkLettersLimited = (index: number) => {
        const currentCountLetters = listCountLetters.reduce((sum, e, i) => {
            return sum + (i <= index ? e : 0);
        }, 0);
        return currentCountLetters <= maxCountLetters ? true : false;
    };
    const newSentence = worlds.reduce((sum, e, i) => {
        return (
            sum + (i < maxCountWorld && checkLettersLimited(i) ? `${e} ` : '')
        );
    }, '');
    const countWorldsNewSentence = newSentence.split(' ').length;
    return newSentence + (countWorldsNewSentence < countWorlds ? '...' : '');
};

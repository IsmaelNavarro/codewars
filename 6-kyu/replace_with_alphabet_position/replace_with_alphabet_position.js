const alphabetPosition = (text) => {
    let firstCharCode = 65;
    let lastChardCode = 90;
    return text
        .split('')
        .reduce((accumulator, char) => {
            let charCode = char.toUpperCase().charCodeAt(0);
            if (charCode >= firstCharCode && charCode <= lastChardCode)
                return accumulator.concat(charCode - firstCharCode + 1);

            return accumulator;
        }, [])
        .join(' ');
};

const alphabetPosition2 = (text) => text.toUpperCase().match(/[a-z]/gi).map(ch => ch.charCodeAt(0) - 64).join(' ');


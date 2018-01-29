const toWeirdCase = string => {
    return string
        .split(' ')
        .map((word) => {
            return word
                .split('')
                .reduce((accumulator, letter, index) => {
                    return accumulator + (index % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase())
                }, '');
        }, [])
        .join(' ');
}
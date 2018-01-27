const tripledouble = (num1, num2) => {
    num1 = num1.toString().split('');
    num2 = num2.toString().split('');
    for (let i = 0; i < num1.length; i++) {
        let count = 0;
        for (let j = 0; j < num1.length; j++) {
            count = (num1[i] === num1[j]) ? ++count : 0;
            if (count >= 3) {
                for (let k = 0; k < num2.length - 1; k++) {
                    if (num1[i] === num2[k]) {
                        if (num2[k + 1] === num1[i]) {
                            return 1;
                        }
                    }
                }
            }
        }
    }
    return 0;
}
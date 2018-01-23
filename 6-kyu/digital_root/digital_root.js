const digital_root = (n) => {
    let dr = n.toString().split('').reduce((accumulator, num) => accumulator += parseInt(num), 0);
    return dr > 10 ? digital_root(dr) : dr;
}

const digital_root2 = (n) => {
    return (n - 1) % 9 + 1;
}
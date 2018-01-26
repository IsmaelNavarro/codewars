const race = (v1, v2, g) => {
    if (v1 >= v2)
        return null;
    let time = g / (v2 - v1);
    let date = new Date(time * 3600 * 1000);
    return [
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds()
    ];

}
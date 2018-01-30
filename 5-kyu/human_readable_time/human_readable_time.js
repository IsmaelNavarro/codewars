const humanReadable = time => {
    let hours = parseInt(time / 3600);
    let minutes = parseInt(time / 60 % 60);
    let seconds = time % 60;
    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

const formatNumber = number => ('0' + number).slice(-2)
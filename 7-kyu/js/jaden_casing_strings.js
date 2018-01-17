String.prototype.toJadenCase = function () {
    return this.split(' ').map((string) => (string.charAt(0).toUpperCase() + string.slice(1))).join(' ');
};
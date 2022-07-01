module.exports = function reverse (n) {
        n = String(n).replace('-', '');
        return Number(n.split('').reverse().join(''));
};

export const makeRandom = function(min: number, max: number): any {
    return ((Math.random() * (max - min + 0.0001)) + min).toFixed(2);
};

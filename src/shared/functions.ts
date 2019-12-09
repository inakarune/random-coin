export const caculateLimitDate = function(limitTime: number): number {
    const today = new Date();
    let hour = today.getHours() + limitTime;
    let date = today.getDate();
    if (hour > 23) {
        hour = 0 + limitTime;
        date += 1;
    }
    return new Date(today.getFullYear(), today.getMonth(), date, hour).getTime();
};

export const makeRandom = function(min: number, max: number): any {
    return ((Math.random() * (max - min + 0.0001)) + min).toFixed(2);
};

export const caculateLimitDate = function(limitTime: number): number {
    const today = new Date();
    return new Date(today.getFullYear(), today.getMonth(), today.getDate(), today.getHours() + limitTime).getTime();
};


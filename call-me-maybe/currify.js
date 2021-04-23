function currify(func, ...values) {
    return (...after) => {
        if (Number.isNaN(func(...values, ...after))) {
            return currify(func, ...values, ...after);
        } else {
            return func(...values, ...after);
        }
    };
}
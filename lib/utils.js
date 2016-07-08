export function extend(a, b) {
    for (var key in b) {
        if (b.hasOwnProperty(key)) {
            if (typeof b[key] === 'object' && b[key] !== null) {
                a[key] = extend(a[key], b[key]);
            } else {
                a[key] = b[key];
            }
        }
    }
    return a;
}

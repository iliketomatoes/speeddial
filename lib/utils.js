/**
* Deep-extends an object with another object
*
* @param { Object } a The object that will be extended, then returned
* @param { Object } b The object that will extend the first paramter
* @return { Object }
*/
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

/**
* Utility function that throws an error if querySelector returns null
*
* @param { String } selector
* @param { HTMLElement } context If not specified the default context is the
*   whole document
* @return { HTMLElement }
*/
export function getElement(selector, context) {
    let where = context || document;
    let element = where.querySelector(selector);
    try {
        if (element === null) throw new Error('SpeedDial could not find any ${selector}');
    } catch (err) {
        console.error(err.message);
    } finally {
        return element;
    }
}

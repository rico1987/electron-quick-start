const nativeToString = Object.prototype.toString;

export function isUndef(val) {
    return val === undefined || val === null;
}

export function isDef(val) {
    return val !== undefined && val !== null;
}

export function isTrue(val) {
    return val === true;
}

export function isFalse(val) {
    return val === false;
}

export function baseIsNaN(val) {
    // eslint-disable-next-line
    return val !== val;
}

export function isPrimitive(val) {
    return (
        typeof val === 'string' ||
        typeof val === 'number' ||
        typeof val === 'boolean'
    );
}

export function isString(val) {
    return typeof val === 'string';
}

export function isObject(val) {
    return val !== null && typeof val === 'object';
}

export function isDate(val) {
    return nativeToString.call(val) === '[object Date]';
}

export function isNumber(val) {
    // eslint-disable-next-line
    return typeof val === 'number' && !isNaN(val);
}

export function isArray(val) {
    return nativeToString.call(val) === '[object Array]';
}

export function isBlob(val) {
    return nativeToString.call(val) === '[object Blob]';
}

export function isArrayBuffer(val) {
    return nativeToString.call(val) === '[object ArrayBuffer]';
}

export function isFormData(val) {
    // eslint-disable-next-line
    return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

export function isFile(val) {
    return nativeToString.call(val) === '[object File]';
}

export function isFunction(val) {
    return nativeToString.call(val) === '[object Function]';
}

export function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}

export function isPlainObject(val) {
    return nativeToString.call(val) === '[object Object]';
}

export function isRegExp(val) {
    return nativeToString.call(val) === '[object RegExp]';
}

export function isValidArrayIndex(val) {
    const n = parseFloat(val);
    // eslint-disable-next-line
    return n >= 0 && Math.floor(n) === n && isFinite(val);
}

export function isURLSearchParams(val) {
    // eslint-disable-next-line
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

export function isArrayBufferView(val) {
    let result;
    if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
    } else {
        result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
    }
    return result;
}

export function isAbsoluteURL(url) {
    // eslint-disable-next-line
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
}

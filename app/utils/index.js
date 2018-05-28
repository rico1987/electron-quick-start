import * as is from './is';

export function trim(str) {
    return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

export function toString(val) {
    if (val === null) {
        return '';
    }
    return typeof val === 'object' ? JSON.stringify(val, null, 2) : String(val);
}

export function toNumber(val) {
    const n = parseFloat(val);
    /* eslint-disable-next-line */
    return isNaN(n) ? val : n;
}

export function makeMap(str, expectsLowerCase) {
    const map = Object.create(null);
    const list = str.split(',');
    for (let i = 0; i < list.length; i += 1) {
        map[list[i]] = true;
    }
    return expectsLowerCase ?
        val => map[val.toLowerCase()] :
        val => map[val];
}

export function remove(arr, item) {
    if (arr.length) {
        const index = arr.indexOf(item);
        if (index > -1) {
            return arr.splice(index, 1);
        }
    }
    return arr;
}

// eslint-disable-next-line
const hasOwnProperty = Object.prototype.hasOwnProperty;

export function hasOwn(obj, key) {
    return !is.isUndef(obj) && hasOwnProperty.call(obj, key);
}

export function toArray(list, start) {
    const startIndex = start || 0;
    let i = list.length - startIndex;
    const ret = new Array(i);
    /* eslint-disable-next-line */
    while (i--) {
        ret[i] = list[i + startIndex];
    }
    return ret;
}

export function bind(fn, thisArg) {
    return (...argus) => {
        const args = new Array(argus.length);
        for (let i = 0; i < args.length; i += 1) {
            args[i] = argus[i];
        }
        return fn.apply(thisArg, args);
    };
}

export function extend(to, _from, thisArg) {
    for (let i = 0, l = Object.keys(_from).length; i < l; i += 1) {
        const key = Object.keys(_from)[i];
        if (thisArg && typeof _from[key] === 'function') {
            // eslint-disable-next-line
            to[key] = bind(_from[key], thisArg);
        } else {
            // eslint-disable-next-line
            to[key] = _from[key];
        }
    }
    return to;
}

export function toObject(arr) {
    const res = {};
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
}

export function looseEqual(a, b) {
    if (a === b) return true;
    const isObjectA = is.isObject(a);
    const isObjectB = is.isObject(b);
    if (isObjectA && isObjectB) {
        try {
            const isArrayA = Array.isArray(a);
            const isArrayB = Array.isArray(b);
            if (isArrayA && isArrayB) {
                return a.length === b.length && a.every((e, i) => looseEqual(e, b[i]));
            } else if (!isArrayA && !isArrayB) {
                const keysA = Object.keys(a);
                const keysB = Object.keys(b);
                return keysA.length === keysB.length &&
                    keysA.every(key => looseEqual(a[key], b[key]));
            }
            return false;
        } catch (e) {
            return false;
        }
    } else if (!isObjectA && !isObjectB) {
        return String(a) === String(b);
    } else {
        return false;
    }
}

export function looseIndexOf(arr, val) {
    for (let i = 0; i < arr.length; i += 1) {
        if (looseEqual(arr[i], val)) return i;
    }
    return -1;
}

export function forEach(obj, fn) {
    if (is.isUndef(obj)) {
        return;
    }

    if (typeof obj !== 'object') {
        // eslint-disable-next-line
        obj = [obj];
    }

    if (is.isArray(obj)) {
        obj.forEach((value, index) => {
            fn.call(null, value, index, obj);
        });
    } else {
        const keys = Object.keys(obj);
        for (let i = 0, l = keys.length; i < l; i += 1) {
            fn.call(null, obj[keys[i]], keys[i], obj);
        }
    }
}

export function merge(...args) {
    const result = {};

    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = merge(result[key], val);
        } else {
            result[key] = val;
        }
    }
    args.forEach((val) => {
        forEach(val, assignValue);
    });
    return result;
}

/**
 * export function equal to merge with the difference being that no reference
 * to original objects is kept.
 */
export function deepMerge(...args) {
    const result = {};

    function assignValue(val, key) {
        if (typeof result[key] === 'object' && typeof val === 'object') {
            result[key] = deepMerge(result[key], val);
        } else if (typeof val === 'object') {
            result[key] = deepMerge({}, val);
        } else {
            result[key] = val;
        }
    }
    args.forEach((val) => {
        forEach(val, assignValue);
    });
    return result;
}

export function once(fn) {
    let called = false;
    /* eslint-disable func-names */
    return function (...args) {
        if (!called) {
            called = true;
            fn.apply(this, args);
        }
    };
}

export function combineURLs(baseURL, relativeURL) {
    return relativeURL
        // eslint-disable-next-line
        ?
        `${baseURL.replace(/\/+$/, '')}/${relativeURL.replace(/^\/+/, '')}` :
        baseURL;
}

export function normalizeHeaderName(headers, normalizedName) {
    forEach(headers, (value, name) => {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            // eslint-disable-next-line
            headers[normalizedName] = value;
            // eslint-disable-next-line
            delete headers[name];
        }
    });
}

export function transformData(data, headers, fns) {
    forEach(fns, (fn) => {
        // eslint-disable-next-line
        data = fn(data, headers);
    });
    return data;
}

export function isStandardBrowserEnv() {
    // eslint-disable-next-line
    if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
        return false;
    }
    return typeof window !== 'undefined' && typeof document !== 'undefined';
}

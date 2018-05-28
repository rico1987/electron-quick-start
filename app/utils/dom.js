import { trim } from './index';

export function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    }
    return (` ${el.className} `).indexOf(` ${cls} `) > -1;
}

/* eslint-disable-next */
export function addClass(el, cls) {
    if (!el) return;
    const classes = (cls || '').split(' ');
    let curClass = el.className;

    for (let i = 0, j = classes.length; i < j; i += 1) {
        const clsName = classes[i];
        /* eslint-disable-next-line */
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else if (!hasClass(el, clsName)) {
            curClass += clsName;
        }
    }

    if (!el.classList) {
        /* eslint-disable-next-line */
        el.className = curClass;
    }
}

export function removeClass(el, cls) {
    if (!el || !cls) return;
    const classes = cls.split(' ');
    let curClass = ` ${el.className} `;


    for (let i = 0, j = classes.length; i < j; i += 1) {
        const clsName = classes[i];
        /* eslint-disable-next-line */
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(` ${clsName} `, ' ');
        }
    }

    if (!el.classList) {
        /* eslint-disable-next-line */
        el.className = trim(curClass);
    }
}

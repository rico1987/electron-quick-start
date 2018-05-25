/* eslint-disable func-names */
export default function promisify(fn) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, ...res) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (res) {
                    if (res.length === 1) {
                        resolve(res[0]);
                    } else {
                        resolve(res);
                    }
                } else {
                    resolve(undefined);
                }
            });
        });
    };
}

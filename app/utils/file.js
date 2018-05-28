import fs from 'fs';
import promisify from './promisify';

export function readFile() {
    return promisify(fs.readFile);
}

export function writeFile() {
    return promisify(fs.writeFile);
}

export function newFile(path) {
    return new Promise((resolve, reject) => {
        fs.open(path, 'wx', (err, fd) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(fd);
        });
    });
}

export function stat() {
    return promisify(fs.stat);
}

export function readDir() {
    return promisify(fs.readDir);
}

export function mkdir() {
    return promisify(fs.mkdir);
}

export function rmdir() {
    return promisify(fs.rmdir);
}

export function unlink() {
    return promisify(fs.unlink);
}

export function exists() {
    return promisify(fs.access);
}

export function read() {
    return promisify(fs.readFile);
}

export function append() {
    return promisify(fs.appendFile);
}

export function write() {
    return promisify(fs.writeFile);
}

export function copy() {
    return promisify(fs.copyFile);
}

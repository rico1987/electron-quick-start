export default function lineCounter(string) {
    let lines = 1;
    for (let i = 0; i < string.length; i += 1) {
        if (string.charAt(i) === '\n') {
            lines += 1;
        }
    }
    return lines;
}

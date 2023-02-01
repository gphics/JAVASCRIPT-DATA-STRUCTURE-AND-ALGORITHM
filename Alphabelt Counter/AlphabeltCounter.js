export default function alphabeltCounter(alp, word) {
    const param = alp.toLowerCase()
    const test =  word.toLowerCase()
    let count = 0
    let alpIndex = test.indexOf(param)
    if (alpIndex === -1) return 0;
    while (alpIndex !== -1) {
        ++count;
        alpIndex = test.indexOf(param, alpIndex + 1)
    }

    return count
}
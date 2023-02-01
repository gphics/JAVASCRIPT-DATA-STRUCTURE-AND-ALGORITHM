
// Contain Numeric

export function ContainNum(n) {
    const reg = /\d/
    return reg.test(n)
}

console.log(ContainNum(23));

export function OnlyNum(n) {
    const reg = /\d+$/
    return reg.test(n)
}

console.log(OnlyNum("l3"));
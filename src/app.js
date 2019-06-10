
const factorial = (num) => {
  if (num <= 1) return 1
  return num * factorial(--num)
}

console.group('start test')
console.log(factorial(5))
console.warn(factorial(3))
console.info(factorial(3))
console.error(factorial(3))
console.groupEnd()
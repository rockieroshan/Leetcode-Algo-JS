function confirmEnding(str: string, target: string) {
  const start = str.length - target.length;
  return str.slice(start) === target;
}

console.log(confirmEnding('Abstraction', 'action'));
console.log(confirmEnding('Open sesampe', 'pen'));

const greeting = 'world';
console.log(process.cwd());

export function hello(world: string = greeting): string {
  if (world === 'Bob') {
    return 'Hiya Bob!';
  }
  return `Hello ${world}!`;
}

export function sample(param: string): string {
  return 'Hola' + param;
}

export function sample2(param: string): string {
  return 'Hello' + param;
}

console.log('Hola Mundo DevOps');

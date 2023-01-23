const greeting = 'world';

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

export function codeSmell(a: boolean) {
  // Intorduced for testing Sonarcloud Quality gate
  const b = 12;
  if (a) {
    return b;
  }
  return b;
}

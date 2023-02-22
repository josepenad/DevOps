export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    isEmpty(): boolean;
  }
}

export interface Connection {
  connect(): Promise<boolean>;
  disconnect(): Promise<boolean>;
  test(): Promise<boolean>;

  list(entityName: string): Promise<unknown[]>;
  create(entityName: string, data: unknown): Promise<unknown>;
  get(entityName: string, uniqueIdentifier: unknown): Promise<unknown>;
  update(
    entityName: string,
    uniqueIdentifier: unknown,
    data: unknown
  ): Promise<unknown>;
  delete(entityName: string, uniqueIdentifier: unknown): Promise<unknown>;
}

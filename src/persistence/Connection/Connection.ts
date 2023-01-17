/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Connection {
  connect(): Promise<boolean>;
  disconnect(): Promise<boolean>;
  test(): Promise<boolean>;

  list(entityName: string): Promise<any[]>;
  create(entityName: string, data: any): Promise<any>;
  get(entityName: string, uniqueIdentifier: any): Promise<any>;
  update(entityName: string, uniqueIdentifier: any, data: any): Promise<any>;
  delete(entityName: string, uniqueIdentifier: any): Promise<any>;
}

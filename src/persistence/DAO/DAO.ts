import { Connection } from '../Connection/Connection';

export abstract class DAO<K, T extends object> {
  protected entityName: string;
  protected connection: Connection;

  constructor(connection: Connection, entityName: string) {
    this.entityName = entityName;
    this.connection = connection;
  }

  async list(): Promise<T[]> {
    return await this.connection.list(this.entityName);
  }

  async create(entity: T): Promise<T> {
    const result = await this.connection.create(this.entityName, entity);
    return result as T;
  }

  async get(id: K): Promise<T> {
    const result = await this.connection.get(this.entityName, { id });
    return result as T;
  }

  async update(id: K, data: T): Promise<T> {
    const result = await this.connection.update(this.entityName, { id }, data);
    return result as T;
  }

  async delete(id: K): Promise<T> {
    const result = await this.connection.delete(this.entityName, { id });
    return result as T;
  }
}

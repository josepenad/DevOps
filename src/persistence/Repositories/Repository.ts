export interface Repository<K, T> {
  list(): Promise<T[]>;
  create(entity: T): Promise<T>;
  get(id: K): Promise<T>;
  update(id: K, entity: T): Promise<boolean>;
  delete(id: K): Promise<boolean>;
}

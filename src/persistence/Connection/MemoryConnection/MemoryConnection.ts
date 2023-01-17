import { Connection } from '../Connection';

export class MemoryConnection implements Connection {
  private db: Map<string, Record<string, string>>;

  constructor() {
    this.db = new Map<string, Record<string, string>>();
  }
  async connect(): Promise<boolean> {
    return true;
  }
  async disconnect(): Promise<boolean> {
    return true;
  }
  async test(): Promise<boolean> {
    return true;
  }
  async list(entityName: string): Promise<string[]> {
    const mapp = this.db.get(entityName);

    if (mapp) return Object.keys(mapp).map(key => mapp[key]);

    return [];
  }

  async create(entityName: string, data: string): Promise<string> {
    const idIncrement = 1;
    const newId: string = (
      parseInt(await this.getLatestKey(entityName)) + idIncrement
    ).toString();

    if (!this.entityExists(entityName)) {
      this.db.set(entityName, { [newId]: data });
    } else {
      const collection = this.db.get(entityName);
      if (collection !== undefined) {
        collection[newId] = data;
      }
    }

    return data;
  }

  private entityExists(entityName: string): boolean {
    return this.db.has(entityName) && this.db.get(entityName) !== null;
  }

  private async getLatestKey(entityName: string): Promise<string> {
    if (!this.entityExists(entityName)) return '-1';

    const collection = this.db.get(entityName) as object;
    const keysNumbers = Object.keys(collection).map(key => parseInt(key));

    return Math.max(...keysNumbers).toString();
  }

  async get(entityName: string, uniqueIdentifier: string): Promise<string> {
    if (!this.entityExists(entityName)) return '';

    const collection = this.db.get(entityName);

    return collection?.[uniqueIdentifier] || '';
  }
  async update(
    entityName: string,
    uniqueIdentifier: string,
    data: string
  ): Promise<string> {
    if (!this.entityExists(entityName)) return '';
    const collection = this.db.get(entityName);

    if (collection) {
      collection[uniqueIdentifier] = data;
      return data;
    }

    return '';
  }

  async delete(entityName: string, uniqueIdentifier: string): Promise<void> {
    if (!this.entityExists(entityName)) {
      const collection = this.db.get(entityName);

      if (collection) {
        delete collection[uniqueIdentifier];
      }
    }
  }
}

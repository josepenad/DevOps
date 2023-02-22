import { Connection } from '../Connection';
import * as hubspotClient from '@hubspot/api-client';

import { config } from '../../../lib/config';
import { HubspotIdentifier } from './Entities';

export class HubspotConnection implements Connection {
  private _hbClient: hubspotClient.Client | undefined;

  constructor() {
    this._hbClient = undefined;
  }

  async connect(): Promise<boolean> {
    try {
      this._hbClient = new hubspotClient.Client({
        accessToken: config.hubspot.accessToken,
        developerApiKey: config.hubspot.apiKey,
      });
      return true;
    } catch (e) {
      console.log(e);
    }
    return false;
  }
  async disconnect(): Promise<boolean> {
    this._hbClient = undefined;
    return true;
  }
  async test(): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  async list(entityName: string): Promise<unknown[]> {
    console.log(entityName);
    throw new Error('Method not implemented.');
  }
  async create(entityName: string, data: unknown): Promise<unknown> {
    console.log(entityName);
    console.log(data);
    throw new Error('Method not implemented.');
  }
  async get(
    entityName: string,
    uniqueIdentifier: HubspotIdentifier
  ): Promise<unknown> {
    console.log(uniqueIdentifier);
    console.log(entityName);

    throw new Error('Method not implemented.');
  }
  async update(
    entityName: string,
    uniqueIdentifier: unknown,
    data: unknown
  ): Promise<unknown> {
    console.log(entityName);
    console.log(uniqueIdentifier);
    console.log(data);
    throw new Error('Method not implemented.');
  }
  async delete(
    entityName: string,
    uniqueIdentifier: unknown
  ): Promise<unknown> {
    console.log(entityName);
    console.log(uniqueIdentifier);

    throw new Error('Method not implemented.');
  }
}

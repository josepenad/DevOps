export type Contact = {
  id: string;
};

export type Company = {
  id: string;
};

export type HubspotIdentifier = {
  id: string;
};

export enum HubspotObjectNames {
  Contact = 'contact',
  Company = 'company',
  Deals = 'deals',
  Quotes = 'quotes',
}

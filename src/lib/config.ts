import { EnvType, load } from 'ts-dotenv';

export type Env = EnvType<typeof schema>;

export type Config = {
  port: string;
  cors: string;
  uriClient: string;
  uriServer: string;

  hubspot: {
    apiKey: string;
    accessToken: string;
    clientID: string;
    secret: string;
    scope: string;
  };

  salesforce: {
    clientID: string;
    clientSecret: string;
    redirectUrl: string;
    username: string;
    password: string;
    secretToken: string;
  };
};

export const schema = {
  PORT: String,
  CORS: String,
  CLIENT_APP: String,
  API_URL: String,

  //Hubspot
  API_KEY_HB: String,
  ACCESS_TOKEN_HB: String,
  CLIENT_ID_HB: String,
  CLIENT_SECRET_HB: String,
  SCOPE_HB: String,

  //Salesforce
  CLIENT_ID_SF: String,
  CLIENT_SECRET_SF: String,
  REDIRECT_URL_SF: String,
  USERNAME_SF: String,
  PASSWORD_SF: String,
  SECRET_TOKEN_SF: String,
};

export let env: Env;
export let config: Config;

export function loadEnv(): void {
  env = load(schema);

  config = {
    port: env.PORT || '8080',
    cors: env.CORS || 'http://localhost:3000',
    uriClient: env.CLIENT_APP || 'http://localhost:3000',
    uriServer: env.API_URL || 'http://localhost:8080/api',

    hubspot: {
      apiKey: env.API_KEY_HB,
      accessToken: env.ACCESS_TOKEN_HB,
      clientID: env.CLIENT_ID_HB,
      secret: env.CLIENT_SECRET_HB,
      scope: env.SCOPE_HB,
    },

    salesforce: {
      clientID: env.CLIENT_ID_SF,
      clientSecret: env.CLIENT_SECRET_SF,
      redirectUrl: env.REDIRECT_URL_SF,
      username: env.USERNAME_SF,
      password: env.PASSWORD_SF,
      secretToken: env.SECRET_TOKEN_SF,
    },
  };
}

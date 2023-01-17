// import { User } from '../src/entities/User';
// import { MemoryConnection } from '../src/persistence/Connection';
// import { UserDAO } from '../src/persistence/DAO';
require('../types');

import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const URI: string = process.env.POSTGRES_URI || '';

const seqConfig = {
  logging: false,
  native: false,
  pool: {
    max: 70,
    min: 50,
  },
  dialectOptions: {
    keepAlive: true,
  },
};

const sequelize = new Sequelize(URI, seqConfig);
async function main() {
  const connection = await sequelize.sync({ alter: true });

  if (connection) console.log('Database is running!');

  const total = 500;

  for (let i = 0; i < total; i++) {
    const result = await connection.query('SELECT id, name FROM sample');

    console.log(result);
  }
}

main();

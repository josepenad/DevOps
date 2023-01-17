import { User } from '../../../entities/User';
import { Connection } from '../../Connection/Connection';
import { DAO } from '../DAO';

export class UserDAO extends DAO<string, User> {
  constructor(connection: Connection) {
    super(connection, 'users');
  }
}

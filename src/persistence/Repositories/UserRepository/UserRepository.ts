import { User } from '../../../entities/User';
import { UserDAO } from '../../DAO';
import { Repository } from '../Repository';

export class UserRepository implements Repository<string, User> {
  private userDao: UserDAO;

  constructor(userDao: UserDAO) {
    this.userDao = userDao;
  }
  async list(): Promise<User[]> {
    return await this.userDao.list();
  }
  async create(entity: User): Promise<User> {
    return await this.userDao.create(entity);
  }
  async get(id: string): Promise<User> {
    return await this.userDao.get(id);
  }
  async update(id: string, entity: User): Promise<boolean> {
    await this.userDao.update(id, entity);
    return true;
  }
  async delete(id: string): Promise<boolean> {
    await this.userDao.delete(id);
    return true;
  }
}

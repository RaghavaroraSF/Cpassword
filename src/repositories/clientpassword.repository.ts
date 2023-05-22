import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {AuthClient} from '../models';

export class ClientpasswordRepository extends DefaultCrudRepository<
  AuthClient,
  typeof AuthClient.prototype.id
> {
  constructor(@inject('datasources.db') dataSource: DbDataSource) {
    super(AuthClient, dataSource);
  }
}

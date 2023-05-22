import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Cpassowrd, CpassowrdRelations} from '../models';

export class CpassowrdRepository extends DefaultCrudRepository<
  Cpassowrd,
  typeof Cpassowrd.prototype.id,
  CpassowrdRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Cpassowrd, dataSource);
  }
}

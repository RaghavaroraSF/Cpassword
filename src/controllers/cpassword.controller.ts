import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {authenticateClient, STRATEGY} from 'loopback4-authentication';
import {Cpassowrd} from '../models';
import {CpassowrdRepository} from '../repositories';

export class CpasswordController {
  constructor(
    @repository(CpassowrdRepository)
    public cpassowrdRepository: CpassowrdRepository,
  ) {}

  @authenticateClient(STRATEGY.CLIENT_PASSWORD)
  @post('/cpassowrds')
  @response(200, {
    description: 'Cpassowrd model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cpassowrd)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cpassowrd, {
            title: 'NewCpassowrd',
            exclude: ['id'],
          }),
        },
      },
    })
    cpassowrd: Omit<Cpassowrd, 'id'>,
  ): Promise<Cpassowrd> {
    return this.cpassowrdRepository.create(cpassowrd);
  }

  @get('/cpassowrds/count')
  @response(200, {
    description: 'Cpassowrd model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cpassowrd) where?: Where<Cpassowrd>,
  ): Promise<Count> {
    return this.cpassowrdRepository.count(where);
  }

  @authenticateClient(STRATEGY.CLIENT_PASSWORD)
  @get('/cpassowrds')
  @response(200, {
    description: 'Array of Cpassowrd model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cpassowrd, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cpassowrd) filter?: Filter<Cpassowrd>,
  ): Promise<Cpassowrd[]> {
    return this.cpassowrdRepository.find(filter);
  }

  @patch('/cpassowrds')
  @response(200, {
    description: 'Cpassowrd PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cpassowrd, {partial: true}),
        },
      },
    })
    cpassowrd: Cpassowrd,
    @param.where(Cpassowrd) where?: Where<Cpassowrd>,
  ): Promise<Count> {
    return this.cpassowrdRepository.updateAll(cpassowrd, where);
  }

  @get('/cpassowrds/{id}')
  @response(200, {
    description: 'Cpassowrd model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cpassowrd, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Cpassowrd, {exclude: 'where'})
    filter?: FilterExcludingWhere<Cpassowrd>,
  ): Promise<Cpassowrd> {
    return this.cpassowrdRepository.findById(id, filter);
  }

  @patch('/cpassowrds/{id}')
  @response(204, {
    description: 'Cpassowrd PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cpassowrd, {partial: true}),
        },
      },
    })
    cpassowrd: Cpassowrd,
  ): Promise<void> {
    await this.cpassowrdRepository.updateById(id, cpassowrd);
  }

  @put('/cpassowrds/{id}')
  @response(204, {
    description: 'Cpassowrd PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() cpassowrd: Cpassowrd,
  ): Promise<void> {
    await this.cpassowrdRepository.replaceById(id, cpassowrd);
  }

  @del('/cpassowrds/{id}')
  @response(204, {
    description: 'Cpassowrd DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.cpassowrdRepository.deleteById(id);
  }
}

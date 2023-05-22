import {Entity, model, property} from '@loopback/repository';

@model()
export class Cpassowrd extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  title: string;


  constructor(data?: Partial<Cpassowrd>) {
    super(data);
  }
}

export interface CpassowrdRelations {
  // describe navigational properties here
}

export type CpassowrdWithRelations = Cpassowrd & CpassowrdRelations;

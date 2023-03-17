import { BaseEntity } from './base.entity';
import { IsString } from 'class-validator';
import { Column, Entity } from 'typeorm';

@Entity('config')
export class Config extends BaseEntity {
  @IsString()
  @Column('varchar', { unique: true })
  public key: string;

  @Column('simple-json')
  public value: Record<string, unknown>;
}

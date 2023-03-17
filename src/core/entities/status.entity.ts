import { Column } from 'typeorm';
import { IsEnum } from 'class-validator';

import { BaseEntity } from './base.entity';
import { EntityStatus } from '../enums/entity-status.enum';

export class StatusEntity extends BaseEntity {
  @IsEnum(EntityStatus)
  @Column({
    type: 'enum',
    nullable: true,
    enum: EntityStatus,
    default: EntityStatus.enabled,
  })
  public entityStatus: EntityStatus;
}

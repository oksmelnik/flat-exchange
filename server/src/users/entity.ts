import { BaseEntity, PrimaryColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import { IsString, IsBoolean } from 'class-validator'
import { Flat } from '../flats/entity'

@Entity()
export class User extends BaseEntity {

  @IsString()
  @Column('text')
  name: string

  @PrimaryColumn('bigint')
  id?: number

  @IsString()
  @Column('text')
  picture: string

  @IsString()
  @Column('text')
  email: string

  @OneToMany(() => Flat, flat => flat.user, {eager: true})
  flat: Flat[]

  }

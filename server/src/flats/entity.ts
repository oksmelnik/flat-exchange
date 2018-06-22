import { BaseEntity, PrimaryColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import { IsString, IsBoolean, IsInt } from 'class-validator'
import { User } from '../users/entity'

@Entity()
export class Flat extends BaseEntity {

  @PrimaryColumn()
  id?: number

  @IsString()
  @Column('text', { nullable: true })
  home_type: string

  @IsString()
  @Column('text', { nullable: true })
  room_type: string

  @IsInt()
  @Column()
  accomodate: number

  @IsString()
  @Column('text', { nullable: true })
  address: string

  @IsBoolean()
  @Column()
  is_active: boolean

  @ManyToOne(_ => User, user => user.flat, {onDelete: "CASCADE"})
  user: User


  }

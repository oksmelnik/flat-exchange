import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne } from 'typeorm'
import { IsString, IsBoolean } from 'class-validator'

@Entity()
export class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @IsString()
  @Column('text')
  name: string

  @IsString()
  @Column('text')
  userID: string

  @IsString()
  @Column('text')
  picture: string

  @IsString()
  @Column('text')
  email: string


  }

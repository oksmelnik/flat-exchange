import {
  BaseEntity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  ManyToOne
} from "typeorm";
import { IsString, IsBoolean, IsInt } from "class-validator";
import { User } from "../users/entity";

@Entity()
export class Flat extends BaseEntity {
  @PrimaryGeneratedColumn() id?: number;

  @IsString()
  @Column("text", { nullable: true })
  home_type: string;

  @IsString()
  @Column("text", { nullable: true })
  room_type: string;

  @IsInt()
  @Column()
  accomodate: number;

  @IsString()
  @Column("text", { nullable: true })
  name: string;

  @IsString()
  @Column("text", { nullable: true })
  summary: string;

  @IsString()
  @Column("text", { nullable: true })
  address: string;

  @IsBoolean()
  @Column({ nullable: true, default: false })
  is_active: boolean;

  @ManyToOne(_ => User, user => user.flat, { onDelete: "CASCADE" })
  user: User;
}

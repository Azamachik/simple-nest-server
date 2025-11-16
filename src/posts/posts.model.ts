import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {User} from "../users/users.model";


interface PostCreationAttrs {
  title: string;
  content: string;
  userId: number;
  image: string;
}

@Table({tableName: 'posts'})
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({ example: '1', description: "Уникальный идентификатор" })
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ApiProperty({ example: 'Заголовок', description: "Заголовок" })
  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @ApiProperty({ example: 'Контент', description: "Контент" })
  @Column({type: DataType.STRING, allowNull: true})
  content: string;

  @ApiProperty({ example: '1', description: "Идентификатор пользователя" })
  @ForeignKey(() => User)
  @Column({type: DataType.INTEGER})
  userId:number

  @ApiProperty({ example: 'asdfasfd.jpg', description: "Файл" })
  @Column({type: DataType.STRING})
  image: string;

  @BelongsTo(() => User)
  author: User;
}

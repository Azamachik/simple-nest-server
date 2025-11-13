import {Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Role} from "./roles.model";
import {ApiProperty} from "@nestjs/swagger";

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
    @ApiProperty({ example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, primaryKey: true, autoIncrement: true})
    id: number;

    @ApiProperty({ example: '1', description: 'Идентификатор пользователя'})
    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @ApiProperty({ example: '1', description: 'Идентификатор роли'})
    @ForeignKey(() => Role)
    @Column({type: DataType.INTEGER})
    roleId: number;
}
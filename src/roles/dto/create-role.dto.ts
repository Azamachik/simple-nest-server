import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreateRoleDto {
    @ApiProperty({ example: "USER", description: "Роль"})
    @IsString({message: 'Должен быть строкой'})
    readonly value: string;
    @ApiProperty({ example: "Пользователь", description: "Описание роли"})
    @IsString({message: 'Должен быть строкой'})
    readonly description: string;
}
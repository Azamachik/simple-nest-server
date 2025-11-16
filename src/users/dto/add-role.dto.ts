import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Роль' })
  @IsString({message: 'Должен быть строкой'})
  readonly value: string;
  @IsString({message: 'Должен быть числом'})
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  readonly userId: number;
}
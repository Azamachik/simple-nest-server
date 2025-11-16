import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class UnbanUserDto {
  @ApiProperty({example: '1', description: 'Идентификатор пользователя'})
  @IsString({message: 'Должен быть числом'})
  readonly userId: number;
}
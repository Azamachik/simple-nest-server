import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  @IsString({message: 'Должен быть числом'})
  readonly userId: number;
  @ApiProperty({ example: 'За пропаганду', description: 'Причина блокировки' })
  @IsString({message: 'Должен быть строкой'})
  readonly banReason: string;
}
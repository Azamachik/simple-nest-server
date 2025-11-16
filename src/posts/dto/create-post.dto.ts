import {ApiProperty} from "@nestjs/swagger";
import {IsString} from "class-validator";

export class CreatePostDto {
  @ApiProperty({ example: 'Заголовок', description: 'Заголовок' })
  @IsString({message: 'Должен быть строкой'})
  readonly title: string;
  @ApiProperty({ example: 'Контент', description: 'Контент' })
  @IsString({message: 'Должен быть строкой'})
  readonly content: string;
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  @IsString({message: 'Должен быть числом'})
  readonly userId: number;
}
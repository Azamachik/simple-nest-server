import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.ru', description: 'Адрес эл.почты' })
  readonly email: string;
  @ApiProperty({ example: 'password', description: 'Пароль' })
  readonly password: string;
}
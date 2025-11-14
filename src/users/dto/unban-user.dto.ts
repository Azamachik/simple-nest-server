import {ApiProperty} from "@nestjs/swagger";

export class UnbanUserDto {
  @ApiProperty({example: '1', description: 'Идентификатор пользователя'})
  readonly userId: number;
}
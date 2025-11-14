import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto {
  @ApiProperty({ example: '1', description: 'Идентификатор пользователя' })
  readonly userId: number;
  @ApiProperty({ example: 'За пропаганду', description: 'Причина блокировки' })
  readonly banReason: string;
}
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { RefreshToken } from './token';

enum AuthTypeEnum {
  SIMPLE = 'SIMPLE',
  EMAIL = 'EMAIL'
}
type AuthType = 'SIMPLE' | 'EMAIL';

@Entity()
export class Auth {
  
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public memberId: number;

  @Column({
    type: 'enum',
    enum: AuthTypeEnum
  })
  public type: AuthType;

  @Column({
    length: 80
  })
  public loginId: string;

  @CreateDateColumn()
  public regDate: Date;

  @OneToMany(() => RefreshToken, (rt) => rt.auth)
  public refreshTokens: RefreshToken[];
}
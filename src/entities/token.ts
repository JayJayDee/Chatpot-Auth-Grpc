import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne } from 'typeorm';
import { Auth } from './auth';

@Entity()
export class RefreshToken {

  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public memberId: number;

  @Column()
  public authId: number;

  @Column({
    length: 80
  })
  public refreshToken: string;

  @CreateDateColumn()
  public regDate: Date;

  @ManyToOne(() => Auth, (auth) => auth.refreshTokens)
  public auth: Auth;
}

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { IsDate, IsString } from 'class-validator';

@Entity({ name: 'solias_user_profiles' })
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @Column({ nullable: true })
  firstName?: string;

  @IsString()
  @Column({ nullable: true })
  lastName?: string;

  @IsDate()
  @Column({ nullable: true })
  dateOfBirth?: Date;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}

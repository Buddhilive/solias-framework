import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './profile.entity';
import { IsEmail, IsString } from 'class-validator';

@Entity({ name: 'solias_users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @IsString()
  @Column({ unique: true })
  username: string;

  @IsEmail()
  @Column({ unique: true })
  email: string;

  @IsString()
  @Column({ select: false })
  password: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(() => UserProfile, (profile) => profile.user, { cascade: true })
  profile: UserProfile;
}

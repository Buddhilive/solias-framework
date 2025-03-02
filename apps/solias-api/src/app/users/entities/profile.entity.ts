import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity({ name: 'solias_user_profiles' })
export class UserProfile {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  firstName?: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column({ nullable: true })
  dateOfBirth?: Date;

  @Column({ nullable: true })
  address?: string;

  @Column({ nullable: true })
  phone?: string;

  @OneToOne(() => User, { cascade: true })
  @JoinColumn()
  user: User;
}

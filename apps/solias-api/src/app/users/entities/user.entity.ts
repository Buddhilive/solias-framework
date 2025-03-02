import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserProfile } from './profile.entity';
import { IsEmail, IsString } from 'class-validator';
import { BlogPost } from '../../posts/entities/blog-post.entity';

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

  @OneToMany(() => BlogPost, (post) => post.user) // One user has many posts
  posts: BlogPost[];

  @BeforeInsert()
  emailToLowercase() {
    this.email = this.email.toLowerCase();
  }
}

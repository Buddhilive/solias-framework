import { IsBoolean, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity({ name: 'solias_posts' })
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: string;

  @IsString()
  @Column({ nullable: false })
  title: string;

  @IsString()
  @Column({ nullable: false })
  content: string;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @IsBoolean()
  @Column({ default: false })
  isPublished: boolean;

  @IsString()
  @Column({ nullable: false })
  slug: string;

  @ManyToOne(() => User, (user) => user.posts) // Many posts belong to one user
  @JoinColumn({ name: 'userId' }) // Specify the foreign key column
  user: User;

  @Column({ name: 'userId' }) // Add the userId column to the database.
  userId: string;
}

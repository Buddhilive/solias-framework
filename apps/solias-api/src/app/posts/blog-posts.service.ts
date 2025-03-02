import { Injectable } from '@nestjs/common';
import { CreateBlogPostDto } from './dto/create-blog-post.dto';
import { UpdateBlogPostDto } from './dto/update-blog-post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPost } from './entities/blog-post.entity';
import { Repository, UpdateResult } from 'typeorm';

@Injectable()
export class BlogPostsService {
  constructor(
    @InjectRepository(BlogPost)
    private blogPostsRepository: Repository<BlogPost>
  ) {}
  create(createBlogPostDto: CreateBlogPostDto): Promise<BlogPost> {
    const blogPost = this.blogPostsRepository.create(createBlogPostDto);
    return this.blogPostsRepository.save(blogPost);
  }

  findAll(): Promise<BlogPost[]> {
    return this.blogPostsRepository.find();
  }

  findOne(id: string): Promise<BlogPost> {
    return this.blogPostsRepository.findOne({ where: { id } });
  }

  update(id: string, updateBlogPostDto: UpdateBlogPostDto): Promise<UpdateResult> {
    return this.blogPostsRepository.update(id, updateBlogPostDto);
  }

  async remove(id: string): Promise<BlogPost> {
    const blogPost = await this.blogPostsRepository.findOne({ where: { id } });
    return this.blogPostsRepository.remove(blogPost);
  }
}

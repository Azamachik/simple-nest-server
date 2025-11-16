import {Body, Controller, Get, Post, UploadedFile, UseGuards, UseInterceptors, UsePipes} from '@nestjs/common';
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {CreatePostDto} from "./dto/create-post.dto";
import {PostsService} from "./posts.service";
import {FileInterceptor} from "@nestjs/platform-express";

@ApiTags('Посты')
@Controller('posts')
export class PostsController {
  constructor(private postService: PostsService) {}

  @ApiOperation({ summary: 'Создание поста'})
  @ApiResponse({ status: 200, type: Post })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  create(@Body() postDto: CreatePostDto,
         @UploadedFile() image) {
    return this.postService.createPost(postDto, image);
  }
}

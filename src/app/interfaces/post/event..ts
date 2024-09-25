import { ICreatePost, Post } from './post.';

export interface ICreateEvent extends ICreatePost {
  date: Date;
  local: string;
}

export interface IEvent extends Post {
  date: Date;
  local: string;
  images: string[];
}

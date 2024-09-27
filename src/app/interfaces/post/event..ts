import { ICreatePost, Post, Posts } from './post.';

export interface ICreateEvent extends ICreatePost {
  date: Date;
  local: string;
}

export interface IEvent extends Post {
  date: Date;
  local: string;
}

export interface IEvents extends Posts {
  date: Date;
  local: string;
}

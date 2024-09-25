import { ICreatePost, Post } from "./post.";

export interface ICreateFeeding extends ICreatePost {
  type: string;
  wifi: string;
  delivery: string;
  parking: string;
}

export interface IFeeding extends Post  {
 type: string;
 wifi: boolean;
 delivery: boolean;
 parking: boolean;
  images: string[];
 }



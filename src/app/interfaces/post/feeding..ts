import { ICreatePost, Post, Posts } from "./post.";

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
 }


 export interface IFeedings extends Posts  {
  type: string;
  wifi: boolean;
  delivery: boolean;
  parking: boolean;
  }
 
 
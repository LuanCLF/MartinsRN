import { ICreatePost, Post } from "./post.";

export interface ICreateHosting extends ICreatePost {
   bedrooms: number;
   bathrooms: number;
   vacancy: number;
   serviceArea: string;
   kitchen: string;
}

export interface IHosting extends Post  { 
   bedrooms: number;
   bathrooms: number;
   vacancy: number;
   serviceArea: boolean;
   kitchen: boolean;
   images: string[];
}


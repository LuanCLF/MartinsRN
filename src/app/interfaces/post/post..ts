export interface ICreatePost {
  title: string;
  whatsApp: string;
  instagram: string;
  description: string;
}

export interface Post {
   id?: string;
   userId: string;
   title: string;
   whatsApp: string;
   instagram: string;
   description: string;
   createdAt: Date;
 }


 export interface ICreateImage {
  image: File;
  id: string;
  category: string;
 }
export interface ICreatePost {
  title: string;
  whatsApp: string;
  instagram: string;
  description: string;
}

export interface Post {
   id?: string;
   userId?: string;
   title: string;
   whatsApp: string;
   instagram: string;
   description: string;
   createdAt: Date;
  images: string[];
 }

 
export interface Posts {
  title: string;
  whatsApp: string;
  instagram: string;
  description: string;
  createdAt: Date;
  images: string[];
}


 export interface ICreateImage {
  image: File;
  id: string;
  category: string;
 }
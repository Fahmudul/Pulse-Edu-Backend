export interface IBlogData {
  [key:string]:any;
  title: string;
  category: string;
  content: string;
  description: string;
  image: File | string;
}

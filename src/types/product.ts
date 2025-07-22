export type ProductCategory = 'electronics' | 'men\'s clothing' | 'women\'s clothing';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
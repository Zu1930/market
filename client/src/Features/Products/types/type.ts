export type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  category_id: number;
  adult: boolean;
};

export type ProductId = Product['id'];

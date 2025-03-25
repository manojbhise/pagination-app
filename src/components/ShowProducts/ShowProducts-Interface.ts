interface Reviews {
  date: string;
  rating: string;
  comment: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface ProductDetails {
  id: number;
  brand: string;
  price: string;
  title: string;
  images: string;
  rating: string;
  weight: number;
  tags: string[];
  thumbnail: string;
  reviews: Reviews[];
  description: string;
  returnPolicy: string;
  availabilityStatus: string;
  discountPercentage: string;
  shippingInformation: string;
  warrantyInformation: string;
}

export interface ProductsResponse {
  skip: number;
  limit: number;
  total: number;
  products: ProductDetails[];
}

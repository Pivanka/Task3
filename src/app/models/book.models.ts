export interface Book {
  id: number,
  title: string,
  cover: string,
  rating: number,
  reviewsNumber: number
}

export interface BookDetails {
  id: number,
  title: string,
  genre: string,
  cover: string,
  author: string,
  content: string,
  rating: number,
  reviews: Array<Review>
}

export interface AddBook {
  id?: number,
  title: string,
  cover: string,
  author: string,
  content: string,
  genre: string
}

export interface Review{
  message: string,
  reviewer: string
}

export interface Rate{
  score: number
}

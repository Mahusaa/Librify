export interface VolumeInfo {
  title: string;
  authors?: string[];
  publishedDate?: string;
  description?: string;
  imageLinks?: {
    thumbnail?: string;
  };
}

export interface Book {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface BookResponse {
  items: Book[];
}

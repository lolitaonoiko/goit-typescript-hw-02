// IMAGE INTERFACES
export interface ImageUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  small_s3: string;
  thumb: string;
}

export interface Image {
  id: string;
  alt_description: string;
  urls: ImageUrls;
}

export type Images = {
  images: Image[];
  modalIsOpen: (alt_description: string, regularUrl: string) => void;
};

export type ImageCardProps = {
  urls: ImageUrls;
  alt_description: string;
  modalIsOpen: (alt_description: string, regularUrl: string) => void;
};

//  REQUEST PROPS
export interface UnsplashParams {
  orientation: string;
  per_page: number;
  content_filter: string;
  query?: string;
  page?: number;
}
export interface RequestApiData<T> {
  results: Image[];
  total_pages: number;
}

// ERROR MESSAGE PROPS
export type ErrorMessageProps = {
  onError: Error;
};

//IMAGE MODAL PROPS
export type ImageModalProps = {
  modalIsOpen: boolean;
  modalUrl: string;
  modalAlt: string;
  closeModal: () => void;
};

//LOAD MORE PROPS
export type LoadMoreBtnProps = {
  onClick: () => void;
};

// SEARCH BAR PROPS
export type SearchBarProps = {
  onSubmit: (inputValue: string) => void;
};

export type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type Room = {
  _id?: string;
  name:  string;
  roomNo: number; 
  floorNo: number;
  capacity: number;
  pricePerSlot: number;
  amenities?: string[];
  isDeleted?: boolean;
};

export interface ApiResponse<T> {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
}

export type MeetingImages = {
  id: number;
  image: string;
};
export type WhyUs = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type HowCardProps = {
  how: {
    id: number;
    title: string;
    image: string;
  };
  index: number;
}

export interface BackendError {
  message: string;
  errorSources?: Array<{ path: string; message: string }>;
  stack?: string;
}
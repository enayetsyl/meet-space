export type Service = {
  id: number;
  title: string;
  description: string;
  image: string;
};

export type Room = {
  _id: string;
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
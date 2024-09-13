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

export type AddRoomProps = {
  handleAddRoom: (event: React.FormEvent<HTMLFormElement>) => void;
  newRoom: Room;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  amenity: string;
  setAmenity: React.Dispatch<React.SetStateAction<string>>;
  handleAddAmenity: () => void;
  handleRemoveAmenity: (index: number) => void;
  setIsAddModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedRoom?: Room | null;
};

export type EditRoomModalProps = {
  selectedRoom: Room | null;
  setSelectedRoom: React.Dispatch<React.SetStateAction<Room | null>>;
  amenity: string;
  setAmenity: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateRoom: (room: Room) => void;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DeleteRoomModalProps = {
  selectedRoom: Room | null;
  handleDeleteRoom: (room:Room) => void;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
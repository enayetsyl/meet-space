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

export type Slot ={
  _id?: string;
  room: string;
  date: string;
  startTime: string;
  endTime: string;
  isBooked?: boolean;
}

export type Booking = {
  _id?: string;
  room: string;
  slot: Slot;
  date: string;
  startTime: string;
  endTime: string;
  isBooked: boolean
}

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

export type AddSlotProps = {
  handleAddSlot: (event: React.FormEvent<HTMLFormElement>) => void;
  newSlot: { room: string; date: string; startTime: string; endTime: string };
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> | { target: { name: string; value: Date | string } }
  ) => void;
  setIsAddSlotModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rooms: Room[];
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

export type EditSlotModalProps = {
  selectedSlot: Slot | null;
  setSelectedSlot: React.Dispatch<React.SetStateAction<Slot | null>>;
  handleEditSlot: (slot: Slot) => void;
  setIsEditSlotModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  rooms: Room[];
}

export type EditRoomModalProps = {
  selectedRoom: Room | null;
  setSelectedRoom: React.Dispatch<React.SetStateAction<Room | null>>;
  amenity: string;
  setAmenity: React.Dispatch<React.SetStateAction<string>>;
  handleUpdateRoom: (room: Room) => void;
  setIsEditModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export type DeleteSlotModalProps = {
  selectedSlot: Slot | null;
  handleDeleteSlot: (slot: Slot) => void;
  setIsDeleteSlotModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type DeleteRoomModalProps = {
  selectedRoom: Room | null;
  handleDeleteRoom: (room:Room) => void;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type User = {
  _id?: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  createdAt?: boolean;
    updatedAt?: boolean;
}

export type BookingData = {
  createdAt: string;
  date: string;
  isConfirmed: "unconfirmed" | "confirmed" | "canceled";
  isDelete: boolean;
  room: Room;
  slots: Slot[];
  totalAmount: number;
  updatedAt: string;
  user: User;
  _id: string;
}

export type MyBooking = {
  date: string;
  isConfirmed: "unconfirmed" | "confirmed" | "canceled";
  isDeleted: boolean;
  room: Room;
  slots: Slot[];
  totalAmount: number;
  _id: string;
}

export type DeleteBookingModalProps = {
  selectedBooking: BookingData | null;
  handleDeleteBooking: (selectedBooking:BookingData) => void;
  setIsDeleteModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export type ApproveBookingModalProps = {
  selectedBooking: BookingData | null;
  handleApproveBooking: (selectedBooking:BookingData) => void;
  setIsApproveBookingModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export type RejectBookingModalProps = {
  selectedBooking: BookingData | null;
  handleRejectBooking: (selectedBooking:BookingData) => void;
  setIsRejectBookingModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
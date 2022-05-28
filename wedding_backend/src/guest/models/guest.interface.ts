export interface GuestData {
  id?: number;
  hash: number;
  male_name: string;
  female_name: string;
  message?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface MessageData {
  message: string;
}

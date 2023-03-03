import { userInterface } from "./user.interface";

export interface AuthResponse {
  user: {
    id: string;
    email: string;
    username: string;
    createdAt: Date;
    updatedAt: Date;
  };
  message: string;
  accessToken: string;
  refreshToken: string;
}

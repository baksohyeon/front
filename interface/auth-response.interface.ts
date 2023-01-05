import { userInterface } from "./user.interface";

export interface AuthResponse {
  message: string;
  statusCode: number;
  user: {
    accessToken: string;
    refreshToken: string;
    user: userInterface;
  };
}

import { iUser } from "./user";

export interface iTodowithuser {
  id: number
  todo: string
  completed: boolean
  userId: number
  user: iUser;
}

import { z } from "zod";

export const roomTypes = {
  lab: "Lab",
  ward: "Ward",
  opd: "OPD",
  pharmacy: "Pharmacy",
  emergency: "Emergency",
  general: "General",
} as const;

export type RoomType = keyof typeof roomTypes;

export interface GridCell {
  id: string;
  name: string;
  type: RoomType;
  floor: number;
  row: number;
  col: number;
}

export interface HelpRequest {
  id: string;
  location: string;
  timePosted: string;
  reward: number;
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  timestamp: string;
}

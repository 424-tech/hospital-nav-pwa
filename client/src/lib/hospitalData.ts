import type { GridCell, HelpRequest, Announcement } from "@shared/schema";

export const floorData: Record<number, GridCell[]> = {
  1: [
    { id: "1-0-0", name: "Reception", type: "general", floor: 1, row: 0, col: 0 },
    { id: "1-0-1", name: "Corridor", type: "general", floor: 1, row: 0, col: 1 },
    { id: "1-0-2", name: "Registration", type: "general", floor: 1, row: 0, col: 2 },
    { id: "1-0-3", name: "Corridor", type: "general", floor: 1, row: 0, col: 3 },
    { id: "1-0-4", name: "Pharmacy", type: "pharmacy", floor: 1, row: 0, col: 4 },
    
    { id: "1-1-0", name: "Corridor", type: "general", floor: 1, row: 1, col: 0 },
    { id: "1-1-1", name: "Waiting", type: "general", floor: 1, row: 1, col: 1 },
    { id: "1-1-2", name: "Corridor", type: "general", floor: 1, row: 1, col: 2 },
    { id: "1-1-3", name: "OPD-1", type: "opd", floor: 1, row: 1, col: 3 },
    { id: "1-1-4", name: "OPD-2", type: "opd", floor: 1, row: 1, col: 4 },
    
    { id: "1-2-0", name: "Stairs", type: "general", floor: 1, row: 2, col: 0 },
    { id: "1-2-1", name: "Corridor", type: "general", floor: 1, row: 2, col: 1 },
    { id: "1-2-2", name: "Corridor", type: "general", floor: 1, row: 2, col: 2 },
    { id: "1-2-3", name: "OPD-3", type: "opd", floor: 1, row: 2, col: 3 },
    { id: "1-2-4", name: "Corridor", type: "general", floor: 1, row: 2, col: 4 },
    
    { id: "1-3-0", name: "Elevator", type: "general", floor: 1, row: 3, col: 0 },
    { id: "1-3-1", name: "Corridor", type: "general", floor: 1, row: 3, col: 1 },
    { id: "1-3-2", name: "Restroom", type: "general", floor: 1, row: 3, col: 2 },
    { id: "1-3-3", name: "Corridor", type: "general", floor: 1, row: 3, col: 3 },
    { id: "1-3-4", name: "Store", type: "general", floor: 1, row: 3, col: 4 },
    
    { id: "1-4-0", name: "Exit", type: "general", floor: 1, row: 4, col: 0 },
    { id: "1-4-1", name: "Corridor", type: "general", floor: 1, row: 4, col: 1 },
    { id: "1-4-2", name: "Corridor", type: "general", floor: 1, row: 4, col: 2 },
    { id: "1-4-3", name: "Corridor", type: "general", floor: 1, row: 4, col: 3 },
    { id: "1-4-4", name: "Info", type: "general", floor: 1, row: 4, col: 4 },
  ],
  2: [
    { id: "2-0-0", name: "Stairs", type: "general", floor: 2, row: 0, col: 0 },
    { id: "2-0-1", name: "Corridor", type: "general", floor: 2, row: 0, col: 1 },
    { id: "2-0-2", name: "Cardiology", type: "lab", floor: 2, row: 0, col: 2 },
    { id: "2-0-3", name: "Microbiology", type: "lab", floor: 2, row: 0, col: 3 },
    { id: "2-0-4", name: "X-Ray", type: "lab", floor: 2, row: 0, col: 4 },
    
    { id: "2-1-0", name: "Elevator", type: "general", floor: 2, row: 1, col: 0 },
    { id: "2-1-1", name: "Corridor", type: "general", floor: 2, row: 1, col: 1 },
    { id: "2-1-2", name: "Corridor", type: "general", floor: 2, row: 1, col: 2 },
    { id: "2-1-3", name: "ICU", type: "emergency", floor: 2, row: 1, col: 3 },
    { id: "2-1-4", name: "Corridor", type: "general", floor: 2, row: 1, col: 4 },
    
    { id: "2-2-0", name: "Corridor", type: "general", floor: 2, row: 2, col: 0 },
    { id: "2-2-1", name: "Ward-A", type: "ward", floor: 2, row: 2, col: 1 },
    { id: "2-2-2", name: "Corridor", type: "general", floor: 2, row: 2, col: 2 },
    { id: "2-2-3", name: "Ward-B", type: "ward", floor: 2, row: 2, col: 3 },
    { id: "2-2-4", name: "Corridor", type: "general", floor: 2, row: 2, col: 4 },
    
    { id: "2-3-0", name: "Corridor", type: "general", floor: 2, row: 3, col: 0 },
    { id: "2-3-1", name: "Corridor", type: "general", floor: 2, row: 3, col: 1 },
    { id: "2-3-2", name: "Nurse Stn", type: "general", floor: 2, row: 3, col: 2 },
    { id: "2-3-3", name: "Corridor", type: "general", floor: 2, row: 3, col: 3 },
    { id: "2-3-4", name: "Corridor", type: "general", floor: 2, row: 3, col: 4 },
    
    { id: "2-4-0", name: "Corridor", type: "general", floor: 2, row: 4, col: 0 },
    { id: "2-4-1", name: "Waiting", type: "general", floor: 2, row: 4, col: 1 },
    { id: "2-4-2", name: "Corridor", type: "general", floor: 2, row: 4, col: 2 },
    { id: "2-4-3", name: "Restroom", type: "general", floor: 2, row: 4, col: 3 },
    { id: "2-4-4", name: "Store", type: "general", floor: 2, row: 4, col: 4 },
  ],
  3: [
    { id: "3-0-0", name: "Stairs", type: "general", floor: 3, row: 0, col: 0 },
    { id: "3-0-1", name: "Corridor", type: "general", floor: 3, row: 0, col: 1 },
    { id: "3-0-2", name: "Op Theater", type: "emergency", floor: 3, row: 0, col: 2 },
    { id: "3-0-3", name: "Recovery", type: "ward", floor: 3, row: 0, col: 3 },
    { id: "3-0-4", name: "Corridor", type: "general", floor: 3, row: 0, col: 4 },
    
    { id: "3-1-0", name: "Elevator", type: "general", floor: 3, row: 1, col: 0 },
    { id: "3-1-1", name: "Corridor", type: "general", floor: 3, row: 1, col: 1 },
    { id: "3-1-2", name: "Corridor", type: "general", floor: 3, row: 1, col: 2 },
    { id: "3-1-3", name: "Corridor", type: "general", floor: 3, row: 1, col: 3 },
    { id: "3-1-4", name: "Ward-C", type: "ward", floor: 3, row: 1, col: 4 },
    
    { id: "3-2-0", name: "Corridor", type: "general", floor: 3, row: 2, col: 0 },
    { id: "3-2-1", name: "Ward-D", type: "ward", floor: 3, row: 2, col: 1 },
    { id: "3-2-2", name: "Corridor", type: "general", floor: 3, row: 2, col: 2 },
    { id: "3-2-3", name: "Ward-E", type: "ward", floor: 3, row: 2, col: 3 },
    { id: "3-2-4", name: "Corridor", type: "general", floor: 3, row: 2, col: 4 },
    
    { id: "3-3-0", name: "Corridor", type: "general", floor: 3, row: 3, col: 0 },
    { id: "3-3-1", name: "Corridor", type: "general", floor: 3, row: 3, col: 1 },
    { id: "3-3-2", name: "Cafeteria", type: "general", floor: 3, row: 3, col: 2 },
    { id: "3-3-3", name: "Corridor", type: "general", floor: 3, row: 3, col: 3 },
    { id: "3-3-4", name: "Corridor", type: "general", floor: 3, row: 3, col: 4 },
    
    { id: "3-4-0", name: "Corridor", type: "general", floor: 3, row: 4, col: 0 },
    { id: "3-4-1", name: "Restroom", type: "general", floor: 3, row: 4, col: 1 },
    { id: "3-4-2", name: "Corridor", type: "general", floor: 3, row: 4, col: 2 },
    { id: "3-4-3", name: "Corridor", type: "general", floor: 3, row: 4, col: 3 },
    { id: "3-4-4", name: "Store", type: "general", floor: 3, row: 4, col: 4 },
  ],
};

export const helpRequests: HelpRequest[] = [
  { id: "h1", location: "Floor 2 - ICU", timePosted: "5 min ago", reward: 15 },
  { id: "h2", location: "Floor 1 - Pharmacy", timePosted: "12 min ago", reward: 15 },
  { id: "h3", location: "Floor 3 - Ward-C", timePosted: "18 min ago", reward: 15 },
  { id: "h4", location: "Floor 2 - X-Ray", timePosted: "25 min ago", reward: 15 },
  { id: "h5", location: "Floor 1 - OPD-1", timePosted: "32 min ago", reward: 15 },
];

export const announcements: Announcement[] = [
  {
    id: "a1",
    title: "Vaccination Drive",
    message: "Free flu shots available at OPD-1 from 9 AM to 5 PM",
    timestamp: "2 hours ago",
  },
  {
    id: "a2",
    title: "Visiting Hours",
    message: "Updated visiting hours: 10 AM - 12 PM and 4 PM - 6 PM daily",
    timestamp: "5 hours ago",
  },
  {
    id: "a3",
    title: "Emergency Contact",
    message: "For emergencies, dial 100 or visit Reception on Floor 1",
    timestamp: "1 day ago",
  },
];

// IncidentTypes.ts
export interface Incident {
  type: string;
  location: string;
  description: string;
  date: string;
  status: string;
  latitude: number;
  longitude: number;
}

export type Doctor = {
  id: number;
  first_name: string;
  last_name: string;
  short_bio: string;
  bio: string;
  phone?: string;
  specialization?: string;
  address?: string;
  city?: string;
  state?: string;
  zipcode?: string;
  shortBio?: string;
  yearsExperience?: number;
  email?: string;
};

export type Recommendation = {
  doctorId: number;
  doctorName: string;
  recommendation: string;
};

export type Patient = {
  id: number;
  first_name?: string;
  last_name?: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  dateOfBirth: string;
  email?: string;
};

export type Appointment = {
  id: number;
  patientId: number;
  doctorId: number;
  date: string;
  time: string;
  symptoms: string;
  aiSummarizedSymptoms?: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
  patient_full_name?: string;
  doctor_full_name?: string;
  ai_summarized_symptoms?: string;
  email?: string;
};

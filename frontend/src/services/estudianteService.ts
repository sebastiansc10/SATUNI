import axios from 'axios';
import { Student } from '@/types';

const BASE_URL = 'http://localhost:8080/api/estudiantes';

export const fetchStudents = async (): Promise<Student[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const searchStudents = async (term: string): Promise<Student[]> => {
  const response = await axios.get(`${BASE_URL}/buscar`, {
    params: { termino: term },
  });
  return response.data;
};

export const createStudent = async (student: Omit<Student, 'id'>): Promise<string> => {
  const response = await axios.post(BASE_URL, student);
  return response.data;
};

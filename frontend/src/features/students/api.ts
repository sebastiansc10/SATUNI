import axios from 'axios';
import type { Student } from '@/types';

const BASE_URL = 'http://localhost:8080/api';

export const studentsApi = {
  getStudents: async (): Promise<Student[]> => {
    const res = await axios.get(`${BASE_URL}/estudiantes`);
    return res.data; // Los datos ya vienen en el formato correcto
  },

  getStudentById: async (id: string): Promise<Student> => {
    const res = await axios.get(`${BASE_URL}/estudiantes/${id}`);
    return res.data; // Lo mismo, los datos ya están correctos
  },

  getStudentCourses: async (studentId: string): Promise<any[]> => {
    const res = await axios.get(`${BASE_URL}/estudiantes/${studentId}/cursos`);
    return res.data;
  },
};

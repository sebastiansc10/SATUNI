import axios from 'axios';
import type {Student, CursoCritico, RendimientoCiclo, CursoJalado } from '@/types';
import type { CursosResumen } from '@/types';
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

export const fetchCursoCritico = async (id: number): Promise<CursoCritico> => {
  const response = await axios.get(`${BASE_URL}/${id}/curso-critico`);
  return response.data;
};

export const fetchRendimientoPorCiclo = async (id: number): Promise<RendimientoCiclo[]> => {
  const response = await axios.get(`${BASE_URL}/${id}/rendimiento-por-ciclo`);
  return response.data;
};

export const fetchCursosJalados = async (id: number): Promise<CursoJalado[]> => {
  const response = await axios.get(`${BASE_URL}/${id}/cursos-jalados`);
  return response.data;
};

export const fetchResumenCursos = async (id: number): Promise<CursosResumen> => {
  const response = await axios.get(`${BASE_URL}/${id}/resumen-cursos`);
  return response.data;
};

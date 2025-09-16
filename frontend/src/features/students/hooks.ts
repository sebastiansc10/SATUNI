// features/students/hooks.ts
import { useState, useEffect } from 'react';

export function useStudents() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8080/api/estudiantes') // Asegúrate que esta URL sea correcta
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);  // Almacena los datos de los estudiantes
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { students, isLoading, error };  // Asegúrate de devolver los estudiantes correctamente
}

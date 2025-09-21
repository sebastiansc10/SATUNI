import { Link } from 'react-router-dom';
import { useStudents } from '@/features/students/hooks';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

interface StudentsTableProps {
  search: string;
  riskFilter: string;
  facultyFilter: string;
}

// 🔍 Función para calcular el nivel de riesgo
const calcularRiesgo = (student: any): string => {
  const { IRA, CRAEST, Promedio } = student;
  if (IRA < 50 || CRAEST < 50 || Promedio < 10) return 'alto';
  if (IRA < 65 || CRAEST < 65 || Promedio < 12) return 'medio';
  return 'bajo';
};

// 🎨 Función para aplicar color según el riesgo
const getColor = (nivel: string): string => {
  if (nivel === 'alto') return 'text-red-600 font-bold';
  if (nivel === 'medio') return 'text-yellow-600 font-semibold';
  return 'text-green-600 font-medium';
};

export function StudentsTable({ search, riskFilter, facultyFilter }: StudentsTableProps) {
  const { students, isLoading, error } = useStudents();

  if (isLoading) return <p>Cargando estudiantes...</p>;
  if (error) return <p>Error al cargar los estudiantes.</p>;

  const filteredStudents = students?.filter((student) => {
    const matchesSearch =
      (student.Nombre?.toLowerCase().includes(search.toLowerCase()) ||
        student.Codigo?.toLowerCase().includes(search.toLowerCase())) &&
      !!student.Nombre;

    const matchesRisk = riskFilter === 'all' || calcularRiesgo(student) === riskFilter;
    const matchesFaculty =
      facultyFilter === 'all' ||
      student.Facultad?.toLowerCase().includes(facultyFilter);

    return matchesSearch && matchesRisk && matchesFaculty;
  }) || [];

  return (
    <div>
      {filteredStudents.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Código</TableHead>
              <TableHead>Nombre</TableHead>
              <TableHead>Facultad</TableHead>
              <TableHead>Ciclo</TableHead>
              <TableHead>Riesgo</TableHead>
              <TableHead>Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.Id_estudiante}>
                <TableCell>{student.Codigo}</TableCell>
                <TableCell>{student.Nombre}</TableCell>
                <TableCell>{student.Facultad}</TableCell>
                <TableCell>{student.Ciclo}</TableCell>
                <TableCell className={getColor(calcularRiesgo(student))}>
                  {calcularRiesgo(student)}
                </TableCell>
                <TableCell>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/students/${student.Id_estudiante}`}>
                      Ver ficha
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <p>No se encontraron estudiantes</p>
      )}
    </div>
  );
}

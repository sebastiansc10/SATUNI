import { useStudents } from '@/features/students/hooks';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface StudentsTableProps {
  search: string;
  riskFilter: string;
  facultyFilter: string;
}

export function StudentsTable({ search, riskFilter, facultyFilter }: StudentsTableProps) {
  const { students, isLoading, error } = useStudents();

  if (isLoading) {
    return (
      <div>
        <p>Cargando estudiantes...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error al cargar los estudiantes.</p>
      </div>
    );
  }

  // Filtrar estudiantes
  const filteredStudents = students?.filter((student) => {
    const matchesSearch =
      (student.Nombre?.toLowerCase().includes(search.toLowerCase()) || 
      student.Codigo?.toLowerCase().includes(search.toLowerCase())) &&
      !!student.Nombre;  // Asegúrate de que `Nombre` no sea undefined

    const matchesRisk = riskFilter === 'all' || student.riskLevel === riskFilter;
    
    const matchesFaculty = facultyFilter === 'all' || 
      student.Facultad?.toLowerCase().includes(facultyFilter);  // Asegúrate de que `Facultad` no sea undefined

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
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredStudents.map((student) => (
              <TableRow key={student.Id_estudiante}>
                <TableCell>{student.Codigo}</TableCell>
                <TableCell>{student.Nombre}</TableCell>
                <TableCell>{student.Facultad}</TableCell>
                <TableCell>{student.Ciclo}</TableCell>
                <TableCell>{student.riskLevel}</TableCell> {/* Asegúrate de que riskLevel esté calculado o definido correctamente */}
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

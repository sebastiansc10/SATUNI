import { useState } from 'react';
import { StudentsTable } from '@/components/dashboard/StudentsTable';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, Filter } from 'lucide-react';

export default function StudentsPage() {
  const [search, setSearch] = useState('');  // Estado para la búsqueda
  const [riskFilter, setRiskFilter] = useState<string>('all');  // Filtro de riesgo
  const [facultyFilter, setFacultyFilter] = useState<string>('all');  // Filtro de facultad

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Estudiantes</h2>
        <p className="text-muted-foreground">
          Gestión y monitoreo de estudiantes en el sistema
        </p>
      </div>

      {/* Filtros */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        {/* Filtro de búsqueda */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o código..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Filtro de Nivel de Riesgo */}
        <Select value={riskFilter} onValueChange={setRiskFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Nivel de riesgo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los niveles</SelectItem>
            <SelectItem value="alto">Riesgo Alto</SelectItem>
            <SelectItem value="medio">Riesgo Medio</SelectItem>
            <SelectItem value="bajo">Riesgo Bajo</SelectItem>
          </SelectContent>
        </Select>

        {/* Filtro de Facultad */}
        <Select value={facultyFilter} onValueChange={setFacultyFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Facultad" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todas las facultades</SelectItem>
            <SelectItem value="industrial">Ing. Industrial</SelectItem>
            <SelectItem value="civil">Ing. Civil</SelectItem>
            <SelectItem value="sistemas">Ing. Sistemas</SelectItem>
            <SelectItem value="mecanica">Ing. Mecánica</SelectItem>
          </SelectContent>
        </Select>

        {/* Botón de más filtros */}
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Más filtros
        </Button>
      </div>

      {/* Tabla de estudiantes */}
      <StudentsTable 
        search={search}
        riskFilter={riskFilter}  // Pasando el filtro de riesgo
        facultyFilter={facultyFilter}  // Pasando el filtro de facultad
      />
    </div>
  );
}

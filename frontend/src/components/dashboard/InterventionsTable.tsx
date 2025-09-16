/*
import { useInterventions } from '@/features/students/hooks';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export function InterventionsTable() {
  const { data: interventions, isLoading } = useInterventions();

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'pendiente': return <Badge variant="outline">Pendiente</Badge>;
      case 'en_proceso': return <Badge variant="default">En Proceso</Badge>;
      case 'concluida': return <Badge variant="secondary">Concluida</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'academica': return <Badge className="bg-blue-100 text-blue-800">Académica</Badge>;
      case 'psicologica': return <Badge className="bg-green-100 text-green-800">Psicológica</Badge>;
      case 'socioeconomica': return <Badge className="bg-purple-100 text-purple-800">Socioeconómica</Badge>;
      default: return <Badge variant="outline">{type}</Badge>;
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className="flex items-center justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
          <span className="ml-2">Cargando intervenciones...</span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Intervenciones ({interventions?.length || 0})</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Estudiante</TableHead>
              <TableHead>Tipo</TableHead>
              <TableHead>Canal</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Responsable</TableHead>
              <TableHead>Fecha</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {interventions?.map((intervention) => (
              <TableRow key={intervention.id}>
                <TableCell className="font-medium">
                  {intervention.studentName}
                </TableCell>
                <TableCell>{getTypeBadge(intervention.type)}</TableCell>
                <TableCell className="capitalize">{intervention.channel}</TableCell>
                <TableCell>{getStatusBadge(intervention.status)}</TableCell>
                <TableCell>{intervention.responsiblePerson}</TableCell>
                <TableCell>{new Date(intervention.createdAt).toLocaleDateString()}</TableCell>
              </TableRow>
            )) || []}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
*/
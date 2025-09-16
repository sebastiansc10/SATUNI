import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Calendar, User } from 'lucide-react';

const mockActionPlans = [
  {
    id: '1',
    name: 'Plan de Rescate - Matemáticas Básicas',
    type: 'rescate',
    description: 'Programa intensivo de nivelación para estudiantes con dificultades en matemáticas',
    studentsCount: 45,
    status: 'activo',
    createdAt: '2024-01-15',
    responsiblePerson: 'Prof. María González'
  },
  {
    id: '2',
    name: 'Emergencia - Alto Riesgo Deserción',
    type: 'emergencia',
    description: 'Intervención inmediata para estudiantes con alto riesgo de deserción',
    studentsCount: 12,
    status: 'activo',
    createdAt: '2024-01-20',
    responsiblePerson: 'Dra. Carmen Ruiz'
  }
];

export function ActionPlansBoard() {
  const getTypeBadge = (type: string) => {
    switch (type) {
      case 'rescate': 
        return <Badge className="bg-sat-yellow/20 text-sat-yellow">Plan de Rescate</Badge>;
      case 'emergencia': 
        return <Badge className="bg-sat-red/20 text-sat-red">Plan de Emergencia</Badge>;
      default: 
        return <Badge variant="outline">{type}</Badge>;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'activo': return <Badge variant="default">Activo</Badge>;
      case 'pausado': return <Badge variant="secondary">Pausado</Badge>;
      case 'completado': return <Badge variant="outline">Completado</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {mockActionPlans.map((plan) => (
        <Card key={plan.id} className="border-2">
          <CardHeader>
            <div className="flex items-start justify-between">
              <CardTitle className="text-lg">{plan.name}</CardTitle>
              {getTypeBadge(plan.type)}
            </div>
            <p className="text-sm text-muted-foreground">
              {plan.description}
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span>{plan.studentsCount} estudiantes</span>
              </div>
              {getStatusBadge(plan.status)}
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span>Responsable: {plan.responsiblePerson}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span>Creado: {new Date(plan.createdAt).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="flex space-x-2 pt-2">
              <Button variant="outline" size="sm">Ver Detalles</Button>
              <Button variant="outline" size="sm">Editar</Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
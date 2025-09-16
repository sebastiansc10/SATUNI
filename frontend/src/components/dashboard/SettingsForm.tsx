import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Save, Plus, Edit, Trash2 } from 'lucide-react';
import { useAppStore } from '@/store/useAppStore';

const mockUsers = [
  { id: '1', name: 'Dr. Juan Pérez', email: 'juan.perez@uni.edu.pe', role: 'administrador', faculty: 'General' },
  { id: '2', name: 'Prof. María González', email: 'maria.gonzalez@uni.edu.pe', role: 'tutor', faculty: 'Ing. Industrial' },
  { id: '3', name: 'Dra. Carmen Ruiz', email: 'carmen.ruiz@uni.edu.pe', role: 'psicologo', faculty: 'Bienestar' }
];

export function SettingsForm() {
  const { riskCriteria, updateRiskCriteria } = useAppStore();
  const [localCriteria, setLocalCriteria] = useState(riskCriteria);

  const handleSaveCriteria = () => {
    updateRiskCriteria(localCriteria);
    alert('Criterios de riesgo actualizados');
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'administrador': return <Badge variant="default">Administrador</Badge>;
      case 'tutor': return <Badge variant="secondary">Tutor</Badge>;
      case 'psicologo': return <Badge variant="outline">Psicólogo</Badge>;
      default: return <Badge variant="outline">{role}</Badge>;
    }
  };

  return (
    <Tabs defaultValue="criteria" className="space-y-6">
      <TabsList>
        <TabsTrigger value="criteria">Criterios de Riesgo</TabsTrigger>
        <TabsTrigger value="users">Usuarios</TabsTrigger>
      </TabsList>

      <TabsContent value="criteria">
        <Card>
          <CardHeader>
            <CardTitle>Criterios de Criticidad</CardTitle>
            <p className="text-sm text-muted-foreground">
              Define los umbrales para determinar el nivel de riesgo de los estudiantes
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Umbral de Bikas</Label>
                <Input 
                  type="number"
                  value={localCriteria.bikasThreshold}
                  onChange={(e) => setLocalCriteria(prev => ({ 
                    ...prev, 
                    bikasThreshold: parseInt(e.target.value) || 0 
                  }))}
                />
                <p className="text-xs text-muted-foreground">
                  Número mínimo de bikas para riesgo medio
                </p>
              </div>

              <div className="space-y-2">
                <Label>Umbral de Trikas</Label>
                <Input 
                  type="number"
                  value={localCriteria.trikasThreshold}
                  onChange={(e) => setLocalCriteria(prev => ({ 
                    ...prev, 
                    trikasThreshold: parseInt(e.target.value) || 0 
                  }))}
                />
                <p className="text-xs text-muted-foreground">
                  Número mínimo de trikas para riesgo alto
                </p>
              </div>

              <div className="space-y-2">
                <Label>Ciclos sin Matrícula</Label>
                <Input 
                  type="number"
                  value={localCriteria.cyclesWithoutEnrollmentThreshold}
                  onChange={(e) => setLocalCriteria(prev => ({ 
                    ...prev, 
                    cyclesWithoutEnrollmentThreshold: parseInt(e.target.value) || 0 
                  }))}
                />
                <p className="text-xs text-muted-foreground">
                  Número máximo de ciclos sin matrícula
                </p>
              </div>

              <div className="space-y-2">
                <Label>Promedio Mínimo</Label>
                <Input 
                  type="number"
                  step="0.1"
                  value={localCriteria.gpaThreshold}
                  onChange={(e) => setLocalCriteria(prev => ({ 
                    ...prev, 
                    gpaThreshold: parseFloat(e.target.value) || 0 
                  }))}
                />
                <p className="text-xs text-muted-foreground">
                  Promedio mínimo aceptable
                </p>
              </div>
            </div>

            <Button onClick={handleSaveCriteria}>
              <Save className="h-4 w-4 mr-2" />
              Guardar Criterios
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="users">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Gestión de Usuarios</CardTitle>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Usuario
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Facultad</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockUsers.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{getRoleBadge(user.role)}</TableCell>
                    <TableCell>{user.faculty}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
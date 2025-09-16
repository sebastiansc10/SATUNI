import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Clock, BookX } from 'lucide-react';
import { Student } from '@/types';

interface RiskWidgetsProps {
  student: Student;
}

export function RiskWidgets({ student }: RiskWidgetsProps) {
  const widgets = [
    {
      title: 'Cursos Bika',
      value: student.bikas,
      icon: AlertTriangle,
      color: 'text-sat-orange',
      bgColor: 'bg-sat-orange/10',
      description: 'Segunda matrícula'
    },
    {
      title: 'Cursos Trika',
      value: student.trikas,
      icon: BookX,
      color: 'text-sat-red',
      bgColor: 'bg-sat-red/10',
      description: 'Tercera matrícula'
    },
    {
      title: 'Ciclos sin Matrícula',
      value: student.cyclesWithoutEnrollment,
      icon: Clock,
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/20',
      description: 'Períodos inactivos'
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {widgets.map((widget) => {
        const Icon = widget.icon;
        return (
          <Card key={widget.title} className={`border-2 ${widget.bgColor}`}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{widget.title}</CardTitle>
              <Icon className={`h-4 w-4 ${widget.color}`} />
            </CardHeader>
            <CardContent>
              <div className={`text-3xl font-bold ${widget.color}`}>
                {widget.value}
              </div>
              <p className="text-xs text-muted-foreground">
                {widget.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
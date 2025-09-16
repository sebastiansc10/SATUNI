import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';
import { Student } from '@/types';

interface RiskBadgeProps {
  student: Student;
}

export function RiskBadge({ student }: RiskBadgeProps) {
  const getRiskConfig = (student: Student) => {
    // Lógica de semáforo
    if (student.trikas >= 2) {
      return {
        level: 'alto',
        variant: 'destructive' as const,
        icon: AlertTriangle,
        color: 'text-sat-red',
        bgColor: 'bg-sat-red/10',
        description: 'Riesgo crítico de deserción'
      };
    }
    
    if (student.trikas >= 1 || student.bikas >= 2) {
      return {
        level: 'medio',
        variant: 'default' as const,
        icon: AlertCircle,
        color: 'text-sat-yellow',
        bgColor: 'bg-sat-yellow/10',
        description: 'Requiere seguimiento académico'
      };
    }

    return {
      level: 'bajo',
      variant: 'secondary' as const,
      icon: CheckCircle,
      color: 'text-sat-green',
      bgColor: 'bg-sat-green/10',
      description: 'Situación académica estable'
    };
  };

  const risk = getRiskConfig(student);
  const Icon = risk.icon;

  return (
    <Card className={`border-2 ${risk.bgColor}`}>
      <CardContent className="flex items-center space-x-3 p-4">
        <Icon className={`h-8 w-8 ${risk.color}`} />
        <div>
          <Badge variant={risk.variant} className="mb-1">
            RIESGO {risk.level.toUpperCase()}
          </Badge>
          <p className="text-sm text-muted-foreground">
            {risk.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
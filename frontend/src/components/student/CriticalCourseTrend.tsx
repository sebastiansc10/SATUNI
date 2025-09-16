import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface CriticalCourseTrendProps {
  studentId: string;
}

// Mock data para la evolución del curso más crítico
const mockTrendData = [
  { attempt: '1er intento', cycle: '2020-1', grade: 6.5 },
  { attempt: '2do intento', cycle: '2020-2', grade: 8.0 },
  { attempt: '3er intento', cycle: '2021-1', grade: 9.2 },
];

export function CriticalCourseTrend({ studentId }: CriticalCourseTrendProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Evolución - Curso Más Crítico</CardTitle>
        <p className="text-sm text-muted-foreground">
          Matemática Básica (MA101) - Historial de calificaciones
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={mockTrendData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="attempt" />
            <YAxis domain={[0, 20]} />
            <Tooltip 
              formatter={(value, name) => [value, 'Nota']}
              labelFormatter={(label) => `${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="grade" 
              stroke="hsl(var(--primary))"
              strokeWidth={3}
              dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 6 }}
            />
            {/* Línea de referencia para nota mínima */}
            <Line 
              type="monotone" 
              dataKey={() => 10.5} 
              stroke="hsl(var(--sat-red))"
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-2 text-xs text-muted-foreground">
          Línea roja punteada: Nota mínima aprobatoria (10.5)
        </div>
      </CardContent>
    </Card>
  );
}
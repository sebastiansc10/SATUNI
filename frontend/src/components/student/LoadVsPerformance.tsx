import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface LoadVsPerformanceProps {
  studentId: string;
}

// Mock data para carga académica vs desempeño
const mockLoadData = [
  { cycle: '2020-1', credits: 22, gpa: 9.2 },
  { cycle: '2020-2', credits: 20, gpa: 10.5 },
  { cycle: '2021-1', credits: 18, gpa: 11.8 },
  { cycle: '2021-2', credits: 20, gpa: 12.1 },
  { cycle: '2022-1', credits: 18, gpa: 10.8 },
  { cycle: '2022-2', credits: 16, gpa: 13.2 },
];

export function LoadVsPerformance({ studentId }: LoadVsPerformanceProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Carga Académica vs Desempeño</CardTitle>
        <p className="text-sm text-muted-foreground">
          Relación entre créditos matriculados y promedio del ciclo
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={mockLoadData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="cycle" />
            <YAxis yAxisId="left" orientation="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Bar 
              yAxisId="left"
              dataKey="credits" 
              name="Créditos" 
              fill="hsl(var(--primary))"
              opacity={0.7}
            />
            <Bar 
              yAxisId="right"
              dataKey="gpa" 
              name="Promedio" 
              fill="hsl(var(--sat-green))"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
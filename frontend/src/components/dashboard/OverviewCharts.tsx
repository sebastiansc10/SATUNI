import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, LabelList } from 'recharts';

const riskDistributionData = [
  { name: 'Bajo Riesgo', value: 892, color: 'hsl(var(--sat-green))' },
  { name: 'Riesgo Medio', value: 266, color: 'hsl(var(--sat-yellow))' },
  { name: 'Riesgo Alto', value: 89, color: 'hsl(var(--sat-red))' },
];

const facultyData = [
  { faculty: 'Ing. Industrial', bajo: 234, medio: 45, alto: 12 },
  { faculty: 'Ing. Civil', bajo: 189, medio: 38, alto: 15 },
  { faculty: 'Ing. Sistemas', bajo: 156, medio: 42, alto: 8 },
  { faculty: 'Ing. Mecánica', bajo: 145, medio: 35, alto: 18 },
  { faculty: 'Ing. Química', bajo: 98, medio: 28, alto: 9 },
  { faculty: 'Arquitectura', bajo: 70, medio: 78, alto: 27 },
];

const retentionPairsRaw = [
  {ingreso: '2022-1', siguiente: '2023-1', ingresantes: 1159, matriculados: 1076},
  {ingreso: '2023-1', siguiente: '2024-1', ingresantes:1123, matriculados: 1027},
  {ingreso: '2024-1', siguiente: '2025-1', ingresantes: 1347, matriculados: 1190},
];

const retentionPairs = retentionPairsRaw.map((r) =>({
  periodo: `${r.ingreso} → ${r.siguiente}`,
  ingresantes: r.ingresantes,
  matriculados: r.matriculados,
  retencionPct: Number(((r.matriculados / r.ingresantes) * 100).toFixed(1)),
  }))

export function OverviewCharts() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Distribución por nivel de riesgo */}
      <Card>
        <CardHeader>
          <CardTitle>Distribución por Nivel de Riesgo</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={riskDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {riskDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Comparativa por facultad */}
      <Card>
        <CardHeader>
          <CardTitle>Estudiantes por Facultad y Riesgo</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={facultyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="faculty" 
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="bajo" name="Bajo Riesgo" fill="hsl(var(--sat-green))" />
              <Bar dataKey="medio" name="Riesgo Medio" fill="hsl(var(--sat-yellow))" />
              <Bar dataKey="alto" name="Riesgo Alto" fill="hsl(var(--sat-red))" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Ratio de Retención (a 1 año) */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>Ratio de Retención (a 1 año)</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="90%" height={320}>
            <BarChart data={retentionPairs}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="periodo" />
              <YAxis />
              <Tooltip
                formatter={(value: number, name) => {
                  if (name === 'retencionPct') return [`${value}%`, 'Retención'];
                  return [value, name === 'ingresantes' ? 'Ingresantes' : 'Matriculados sig. ciclo'];
                }}
              />
              <Legend />
              <Bar dataKey="ingresantes" name="Ingresantes" fill="hsl(220 10% 50%)" />
              <Bar dataKey="matriculados" name="Matriculados sig. ciclo" fill="hsl(var(--sat-green))">
               {/* Etiqueta con el % de retención */}
                <LabelList dataKey="retencionPct" position="top" formatter={(v: number) => `${v}%`} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-2 text-xs text-muted-foreground">
            Medición: ingresantes del ciclo indicado vs. matriculados en el ciclo siguiente (oficial). Este bloque es histórico confirmado; la parte superior del dashboard muestra la <strong>continuidad proyectada</strong> basada en riesgo actual.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
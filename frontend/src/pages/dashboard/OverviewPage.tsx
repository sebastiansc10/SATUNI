import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { OverviewCharts } from '@/components/dashboard/OverviewCharts';
import { AlertTriangle, Users, TrendingUp, UserCheck } from 'lucide-react';

export default function OverviewPage() {
  const stats = [
    {
      title: 'Total Estudiantes',
      value: '1,247',
      icon: Users,
      change: '+5.2%',
      changeType: 'positive' as const,
    },
    {
      title: 'En Riesgo Alto',
      value: '89',
      icon: AlertTriangle,
      change: '+12.1%',
      changeType: 'negative' as const,
    },
    {
      title: 'Intervenciones Activas',
      value: '156',
      icon: UserCheck,
      change: '+8.3%',
      changeType: 'positive' as const,
    },
    {
      title: 'Continuidad proyectada',
      value: '92.4%',
      icon: TrendingUp,
      change: '+2.1%',
      changeType: 'positive' as const,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard General</h2>
        <p className="text-muted-foreground">
          Resumen de la situación académica y alertas tempranas
        </p>
      </div>

      {/* Estadísticas principales */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${
                stat.changeType === 'positive' 
                  ? 'text-sat-green' 
                  : 'text-sat-orange'
              }`}>
                {stat.change} respecto al 2025-1
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Gráficas */}
      <OverviewCharts />
    </div>
  );
}
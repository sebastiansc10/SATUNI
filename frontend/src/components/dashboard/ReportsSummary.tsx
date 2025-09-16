import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, BarChart } from 'lucide-react';

const reportItems = [
  {
    title: 'Lista de Estudiantes en Riesgo',
    description: 'Reporte completo de estudiantes con nivel de riesgo medio y alto',
    format: 'Excel',
    icon: FileText,
    action: 'exportRiskStudents'
  },
  {
    title: 'Indicadores de Retención',
    description: 'Estadísticas de retención por facultad y período académico',
    format: 'PDF',
    icon: BarChart,
    action: 'exportRetention'
  },
  {
    title: 'Evolución de la Deserción',
    description: 'Análisis histórico de deserción estudiantil',
    format: 'PDF',
    icon: BarChart,
    action: 'exportDesertion'
  },
  {
    title: 'Facultades con Más Casos',
    description: 'Ranking de facultades con mayor cantidad de casos de riesgo',
    format: 'Excel',
    icon: FileText,
    action: 'exportFaculties'
  }
];

const kpiData = [
  { label: 'Tasa de Retención Global', value: '92.4%', change: '+2.1%', positive: true },
  { label: 'Estudiantes Intervenidos', value: '156', change: '+15.3%', positive: true },
  { label: 'Casos Resueltos', value: '89', change: '+8.7%', positive: true },
  { label: 'Deserción Semestral', value: '7.6%', change: '-1.2%', positive: true }
];

export function ReportsSummary() {
  const handleExport = (action: string) => {
    // Mock export functionality
    console.log(`Exportando reporte: ${action}`);
    alert(`Iniciando descarga del reporte (Mock)`);
  };

  return (
    <div className="space-y-6">
      {/* KPIs */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => (
          <Card key={kpi.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {kpi.label}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <p className={`text-xs ${
                kpi.positive ? 'text-sat-green' : 'text-sat-red'
              }`}>
                {kpi.change} vs período anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Reportes disponibles */}
      <Card>
        <CardHeader>
          <CardTitle>Reportes Disponibles</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {reportItems.map((report) => {
              const Icon = report.icon;
              return (
                <div key={report.title} className="flex items-start space-x-3 p-4 border rounded-lg">
                  <Icon className="h-8 w-8 text-primary mt-1" />
                  <div className="flex-1">
                    <h4 className="font-medium">{report.title}</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      {report.description}
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleExport(report.action)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Descargar {report.format}
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
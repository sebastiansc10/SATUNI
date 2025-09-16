import { ReportsSummary } from '@/components/dashboard/ReportsSummary';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Reportes y Estadísticas</h2>
        <p className="text-muted-foreground">
          Informes de retención, deserción y análisis académico
        </p>
      </div>

      <ReportsSummary />
    </div>
  );
}
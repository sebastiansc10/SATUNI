import { SettingsForm } from '@/components/dashboard/SettingsForm';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Configuración</h2>
        <p className="text-muted-foreground">
          Criterios de riesgo y gestión de usuarios del sistema
        </p>
      </div>

      <SettingsForm />
    </div>
  );
}
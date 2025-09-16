import { NotificationsPanel } from '@/components/dashboard/NotificationsPanel';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Notificaciones</h2>
          <p className="text-muted-foreground">
            Envío de alertas y seguimiento de notificaciones
          </p>
        </div>
        <Button>
          <Send className="h-4 w-4 mr-2" />
          Enviar Notificación
        </Button>
      </div>

      <NotificationsPanel />
    </div>
  );
}
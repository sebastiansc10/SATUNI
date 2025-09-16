import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  MessageSquare, 
  FileText, 
  BarChart3, 
  Bell, 
  Settings 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    title: 'Inicio',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Estudiantes',
    href: '/dashboard/students',
    icon: Users,
  },
  {
    title: 'Intervenciones',
    href: '/dashboard/interventions',
    icon: MessageSquare,
  },
  {
    title: 'Planes de acción',
    href: '/dashboard/action-plans',
    icon: FileText,
  },
  {
    title: 'Reportes',
    href: '/dashboard/reports',
    icon: BarChart3,
  },
  {
    title: 'Notificaciones',
    href: '/dashboard/notifications',
    icon: Bell,
  },
  {
    title: 'Configuración',
    href: '/dashboard/settings',
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <div className="w-56 border-r bg-background">
      <nav className="flex-1 space-y-1 p-4">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === '/dashboard'}
            className={({ isActive }) =>
              cn(
                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
              )
            }
          >
            <item.icon className="mr-3 h-4 w-4" />
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
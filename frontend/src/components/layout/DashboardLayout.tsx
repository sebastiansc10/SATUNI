import { Outlet } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { useAppStore } from '@/store/useAppStore';

export function DashboardLayout() {
  const { currentUser, logout } = useAppStore();

  return (
    <div className="min-h-screen bg-background">
      {/* Header fijo */}
      <header className="sticky top-0 z-40 w-full border-b bg-sat-red text-white">
        <div className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold">
              SAT UNI - Sistema de Alerta Temprana
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium">
                {currentUser?.name ?? 'Usuario'}
              </p>
              <p className="text-xs text-white/80">Administrador</p>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage src={currentUser?.avatar} />
              <AvatarFallback className="bg-white/20 text-white">
                {currentUser?.name?.charAt(0) ?? 'U'}
              </AvatarFallback>
            </Avatar>
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="text-white hover:bg-white/20"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Contenido principal */}
        <main className="flex-1">
          <div className="container mx-auto p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
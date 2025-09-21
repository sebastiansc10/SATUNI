import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import { DashboardLayout } from "./components/layout/DashboardLayout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import OverviewPage from "./pages/dashboard/OverviewPage";
import StudentsPage from "./pages/dashboard/StudentsPage";
import InterventionsPage from "./pages/dashboard/InterventionsPage";
import ActionPlansPage from "./pages/dashboard/ActionPlansPage";
import ReportsPage from "./pages/dashboard/ReportsPage";
import NotificationsPage from "./pages/dashboard/NotificationsPage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import StudentDetailPage from "./pages/StudenteDetailPage"; // ✅ Importado

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<LoginPage />} />

          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<OverviewPage />} />
            <Route path="students" element={<StudentsPage />} />
            <Route path="interventions" element={<InterventionsPage />} />
            <Route path="action-plans" element={<ActionPlansPage />} />
            <Route path="reports" element={<ReportsPage />} />
            <Route path="notifications" element={<NotificationsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* ✅ Ruta protegida para ficha del estudiante */}
          <Route 
            path="/students/:studentId" 
            element={
              <ProtectedRoute>
                <StudentDetailPage />
              </ProtectedRoute>
            } 
          />

          {/* 🧪 Ruta protegida para intervención (placeholder temporal) */}
          <Route 
            path="/students/:studentId/intervention" 
            element={
              <ProtectedRoute>
                <div className="p-6">Intervención académica (pendiente)</div>
              </ProtectedRoute>
            } 
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

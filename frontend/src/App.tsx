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


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          
          {/* Login route */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Protected Dashboard routes */}
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

          {/* Protected Student profile routes */}
          <Route 
            path="/students/:studentId" 
            element={
              <ProtectedRoute>
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/students/:studentId/intervention" 
            element={
              <ProtectedRoute>
              </ProtectedRoute>
            } 
          />
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

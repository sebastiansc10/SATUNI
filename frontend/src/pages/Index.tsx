import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Shield, Users, BarChart3 } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sat-red/10 via-background to-primary/5">
      <div className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-red bg-clip-text text-transparent">
            SAT UNI
          </h1>
          <h2 className="text-3xl font-bold mb-4 text-foreground">
            Sistema de Alerta Temprana
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Plataforma integral para la detección temprana y prevención de la deserción estudiantil
            en la Universidad Nacional de Ingeniería
          </p>
          <Button asChild size="lg" className="bg-sat-red hover:bg-sat-red-dark">
            <Link to="/dashboard">
              Acceder al Dashboard
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Features */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <Card className="text-center border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Shield className="h-12 w-12 text-sat-red mx-auto mb-4" />
              <CardTitle>Detección Temprana</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Identificación automática de estudiantes en riesgo académico mediante algoritmos inteligentes
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle>Intervención Personalizada</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Planes de acción específicos y seguimiento individualizado para cada estudiante
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-2 hover:shadow-lg transition-shadow">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-sat-green mx-auto mb-4" />
              <CardTitle>Análisis y Reportes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Estadísticas detalladas y reportes para la toma de decisiones académicas informadas
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Footer */}
        <div className="text-center bg-card rounded-lg p-8 border">
          <h3 className="text-2xl font-bold mb-4">¿Listo para comenzar?</h3>
          <p className="text-muted-foreground mb-6">
            Accede al sistema y comienza a monitorear el rendimiento académico estudiantil
          </p>
          <Button asChild variant="outline" size="lg">
            <Link to="/dashboard">Ingresar al Sistema</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

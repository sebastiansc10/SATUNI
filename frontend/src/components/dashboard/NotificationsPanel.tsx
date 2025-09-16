import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const mockNotifications = [
  {
    id: '1',
    type: 'email',
    recipient: 'kevin@uni.edu.pe',
    subject: 'Recordatorio de cita',
    message: 'El estudiante Ana García requiere intervención inmediata...',
    status: 'enviado',
    sentAt: '2024-01-20T10:30:00'
  },
  {
    id: '2',
    type: 'whatsapp',
    recipient: '+51987654321',
    subject: 'Recordatorio de cita',
    message: 'Recordamos su cita de tutoría académica...',
    status: 'pendiente',
    sentAt: null
  }
];

export function NotificationsPanel() {
  const [formData, setFormData] = useState({
    type: '',
    recipient: '',
    subject: '',
    message: ''
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'enviado': return <Badge variant="default">Enviado</Badge>;
      case 'pendiente': return <Badge variant="secondary">Pendiente</Badge>;
      case 'fallido': return <Badge variant="destructive">Fallido</Badge>;
      default: return <Badge variant="outline">{status}</Badge>;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'email': return <Mail className="h-4 w-4" />;
      case 'sms': return <Phone className="h-4 w-4" />;
      case 'whatsapp': return <MessageCircle className="h-4 w-4" />;
      default: return null;
    }
  };

  const handleSend = () => {
    // Mock send functionality
    console.log('Enviando notificación:', formData);
    alert('Notificación enviada (Mock)');
    setFormData({ type: '', recipient: '', subject: '', message: '' });
  };

  return (
    <Tabs defaultValue="send" className="space-y-6">
      <TabsList>
        <TabsTrigger value="send">Enviar Notificación</TabsTrigger>
        <TabsTrigger value="history">Historial</TabsTrigger>
      </TabsList>

      <TabsContent value="send">
        <Card>
          <CardHeader>
            <CardTitle>Nueva Notificación</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Tipo de Notificación</Label>
                <Select value={formData.type} onValueChange={(value) => 
                  setFormData(prev => ({ ...prev, type: value }))
                }>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="sms">SMS</SelectItem>
                    <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Destinatario</Label>
                <Input 
                  placeholder="Email, teléfono o WhatsApp"
                  value={formData.recipient}
                  onChange={(e) => setFormData(prev => ({ ...prev, recipient: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Asunto</Label>
              <Input 
                placeholder="Asunto de la notificación"
                value={formData.subject}
                onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
              />
            </div>

            <div className="space-y-2">
              <Label>Mensaje</Label>
              <Textarea 
                placeholder="Contenido del mensaje..."
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              />
            </div>

            <Button onClick={handleSend} className="w-full">
              <Send className="h-4 w-4 mr-2" />
              Enviar Notificación
            </Button>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="history">
        <Card>
          <CardHeader>
            <CardTitle>Historial de Notificaciones</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Destinatario</TableHead>
                  <TableHead>Asunto</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Fecha</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockNotifications.map((notification) => (
                  <TableRow key={notification.id}>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getTypeIcon(notification.type)}
                        <span className="capitalize">{notification.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{notification.recipient}</TableCell>
                    <TableCell>{notification.subject}</TableCell>
                    <TableCell>{getStatusBadge(notification.status)}</TableCell>
                    <TableCell>
                      {notification.sentAt 
                        ? new Date(notification.sentAt).toLocaleDateString()
                        : '-'
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
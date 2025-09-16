import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function InterventionsPage() {
  const [open, setOpen] = useState(false);

  // estado mínimo solo para demo (sin backend)
  const [form, setForm] = useState({
    studentName: "",
    type: "academica",
    channel: "presencial",
    responsiblePerson: "",
    dueAt: "",
    notes: "",
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.studentName || !form.responsiblePerson) {
      toast.error("Completa estudiante y responsable");
      return;
    }
    // 🔵 Sólo UI: muestra confirmación y cierra
    toast.success("Borrador de intervención creado (UI)");
    setOpen(false);
    setForm({
      studentName: "", type: "academica", channel: "presencial",
      responsiblePerson: "", dueAt: "", notes: "",
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Intervenciones</h2>
          <p className="text-muted-foreground">Gestión de intervenciones académicas y de apoyo</p>
        </div>

        {/* 🔵 Botón que ABRE un modal (sin backend) */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nueva Intervención
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nueva Intervención</DialogTitle>
            </DialogHeader>

            <form className="space-y-4" onSubmit={submit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Estudiante</Label>
                  <Input
                    placeholder="Ana García Pérez"
                    value={form.studentName}
                    onChange={(e) => setForm({ ...form, studentName: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Tipo</Label>
                  <Select value={form.type} onValueChange={(v) => setForm({ ...form, type: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academica">Académica</SelectItem>
                      <SelectItem value="psicologica">Psicológica</SelectItem>  
                      <SelectItem value="socioeconomica">Socioeconómica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Canal</Label>
                  <Select value={form.channel} onValueChange={(v) => setForm({ ...form, channel: v })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="presencial">Presencial</SelectItem>
                      <SelectItem value="telefono">Teléfono</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="virtual">Virtual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Responsable</Label>
                  <Input
                    placeholder="Prof. Juan Méndez"
                    value={form.responsiblePerson}
                    onChange={(e) => setForm({ ...form, responsiblePerson: e.target.value })}
                  />
                </div>

                <div>
                  <Label>Fecha</Label>
                  <Input
                    type="datetime-local"
                    value={form.dueAt}
                    onChange={(e) => setForm({ ...form, dueAt: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label>Notas / Objetivo</Label>
                <Textarea
                  placeholder="Ej.: Tutoría de Cálculo I, coordinar refuerzo…"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                />
              </div>

              <DialogFooter>
                <Button type="submit">Guardar (demo)</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <InterventionsTable />
    </div>
  );
}

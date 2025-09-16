import { useState } from "react";
import { Button } from "@/components/ui/button";
import {ActionPlansBoard} from "@/components/dashboard/ActionPlansBoard";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Plus } from "lucide-react";
export default function ActionPlansPage() {
  const [open, setOpen] = useState(false); // Para abrir/cerrar el modal
  const [form, setForm] = useState({
    name: "",
    type: "academica", // Cambiar según el tipo de intervención
    description: "",
    responsiblePerson: "",
    program: "",  // Nuevo campo para el tipo de programa asociado
  });

  // Función para guardar el plan
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.responsiblePerson || !form.program) {
      toast.error("Completa los campos necesarios");
      return;
    }
    toast.success("Nuevo plan de acción creado");
    setOpen(false);
    setForm({ name: "", type: "academica", description: "", responsiblePerson: "", program: "" });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Planes de Acción</h2>
          <p className="text-muted-foreground">Planes académicos, psicológicos, socioeconómicos, etc.</p>
        </div>

        {/* Botón que abre el modal */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Plan
            </Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Nuevo Plan de Acción</DialogTitle>
            </DialogHeader>

            <form className="space-y-4" onSubmit={handleSave}>
              <div className="space-y-4">
                {/* Nombre del Plan */}
                <div>
                  <Label>Nombre del Plan</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ej. Plan de Rescate - Matemáticas Básicas"
                  />
                </div>

                {/* Tipo de intervención */}
                <div>
                  <Label>Tipo de Plan</Label>
                  <Select
                    value={form.type}
                    onValueChange={(v) => setForm({ ...form, type: v })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar tipo de plan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="academica">Académica</SelectItem>
                      <SelectItem value="psicologica">Psicológica</SelectItem>
                      <SelectItem value="socioeconomica">Socioeconómica</SelectItem>
                      <SelectItem value="taller">Talleres/Programas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Descripción */}
                <div>
                  <Label>Descripción</Label>
                  <Textarea
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Descripción del plan..."
                    rows={4}
                  />
                </div>

                {/* Responsable */}
                <div>
                  <Label>Responsable</Label>
                  <Input
                    value={form.responsiblePerson}
                    onChange={(e) => setForm({ ...form, responsiblePerson: e.target.value })}
                    placeholder="Nombre del responsable"
                  />
                </div>

                {/* Tipo de Programa/Taller (dependiendo del tipo de plan) */}
                {form.type === "taller" && (
                  <div>
                    <Label>Programa/Taller</Label>
                    <Select
                      value={form.program}
                      onValueChange={(v) => setForm({ ...form, program: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar programa" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tutorias">Tutorías</SelectItem>
                        <SelectItem value="refuerzo">Refuerzo Académico</SelectItem>
                        <SelectItem value="habilidades_blandas">Habilidades Blandas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                <DialogFooter>
                  <Button type="submit">Guardar Plan</Button>
                </DialogFooter>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <ActionPlansBoard />
    </div>
  );
}

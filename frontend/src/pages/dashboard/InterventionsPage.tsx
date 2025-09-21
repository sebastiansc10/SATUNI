import { useState } from 'react';
import InterventionsView from '@/pages/InterventionsView';
import InterventionsTable from '@/components/dashboard/InterventionsTable';
import type { Intervention } from '@/types';

const InterventionPage = () => {
  const [interventions, setInterventions] = useState<Intervention[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);

  // Datos fijos del estudiante (puedes reemplazar por props o fetch si lo necesitas)
  const idEstudiante = 1;
  const nombreEstudiante = 'Juan Perez';

  const handleAddIntervention = async (nueva: Intervention) => {
    try {
      const response = await fetch('http://localhost:8080/api/intervenciones', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nueva),
      });

      if (!response.ok) throw new Error('Error al registrar la intervención');

      setInterventions((prev) => [...prev, nueva]);
      setMostrarModal(false);
    } catch (error) {
      console.error('Error al guardar intervención:', error);
    }
  };

  return (
    <div className="p-6 space-y-6 relative">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Intervenciones</h1>
          <p className="text-sm text-gray-500">Gestión de intervenciones académicas y de apoyo</p>
        </div>
        <button
          onClick={() => setMostrarModal(true)}
          className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow"
        >
          + Nueva Intervención
        </button>
      </div>

      <InterventionsTable data={interventions} />

      {mostrarModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-xl relative">
            <InterventionsView
              onSave={handleAddIntervention}
              idEstudiante={idEstudiante}
              nombreEstudiante={nombreEstudiante}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setMostrarModal(false)}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InterventionPage;

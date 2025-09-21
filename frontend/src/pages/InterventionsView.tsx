import { useState } from 'react';
import type { Intervention } from '@/types';

interface Props {
  onSave: (intervention: Intervention) => void;
  idEstudiante: number;
  nombreEstudiante: string;
}

const InterventionsView = ({ onSave, idEstudiante, nombreEstudiante }: Props) => {
  const [tipo, setTipo] = useState('');
  const [canal, setCanal] = useState('');
  const [responsable, setResponsable] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nuevaIntervencion: Intervention = {
      idEstudiante,
      tipo,
      canal,
      responsable,
      descripcion,
      fecha: new Date().toISOString(),
    };
    onSave(nuevaIntervencion);
    setTipo('');
    setCanal('');
    setResponsable('');
    setDescripcion('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Registrar Intervención</h2>

      <p className="text-sm text-gray-600">
        Intervención para: <span className="font-semibold">{nombreEstudiante}</span>
      </p>

      <div>
        <label className="block text-sm font-medium text-gray-700">Tipo de Intervención</label>
        <select
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleccionar...</option>
          <option value="Académica">Académica</option>
          <option value="Psicológica">Psicológica</option>
          <option value="Social">Social</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Canal</label>
        <select
          value={canal}
          onChange={(e) => setCanal(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="">Seleccionar...</option>
          <option value="Presencial">Presencial</option>
          <option value="Virtual">Virtual</option>
          <option value="Telefónico">Telefónico</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Responsable</label>
        <input
          type="text"
          value={responsable}
          onChange={(e) => setResponsable(e.target.value)}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Ej. Prof. Luis Méndez"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Descripción</label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          rows={4}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe brevemente la intervención realizada..."
        />
      </div>

      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow"
        >
          Guardar Intervención
        </button>
      </div>
    </form>
  );
};

export default InterventionsView;

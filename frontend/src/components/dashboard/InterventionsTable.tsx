import type { Intervention } from '@/types';

const InterventionsTable = ({ data }: { data: Intervention[] }) => {
  return (
    <table className="w-full text-sm text-left border border-gray-200">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2">Tipo</th>
          <th className="px-4 py-2">Canal</th>
          <th className="px-4 py-2">Responsable</th>
          <th className="px-4 py-2">Descripción</th>
          <th className="px-4 py-2">Fecha</th>
        </tr>
      </thead>
      <tbody>
        {data.map((i, idx) => (
          <tr key={idx} className="border-t">
            <td className="px-4 py-2">{i.tipo}</td>
            <td className="px-4 py-2">{i.canal}</td>
            <td className="px-4 py-2">{i.responsable}</td>
            <td className="px-4 py-2">{i.descripcion}</td>
            <td className="px-4 py-2">{new Date(i.fecha).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InterventionsTable;

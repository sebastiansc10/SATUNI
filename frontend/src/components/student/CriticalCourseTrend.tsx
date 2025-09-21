import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import type { CursoCritico } from '@/types';

interface Props {
  data: CursoCritico;
}

const CriticalCourseTrend = ({ data }: Props) => {
  const intentosConLabel = data.intentos.map((i, idx) => ({
    ...i,
    intentoLabel: `${idx + 1}er intento`
  }));

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Historial de calificaciones – {data.curso}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={intentosConLabel}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="intentoLabel" label={{ value: 'Intentos', position: 'insideBottom', offset: -5 }} />
          <YAxis domain={[0, 20]} label={{ value: 'Nota', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            type="monotone"
            dataKey="nota"
            stroke="#2563eb"
            strokeWidth={2}
            dot={{ r: 5 }}
            name="Nota obtenida"
          />
          <ReferenceLine
            y={10.5}
            stroke="red"
            strokeDasharray="5 5"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CriticalCourseTrend;

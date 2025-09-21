import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from 'recharts';
import type { RendimientoCiclo } from '@/types';

interface Props {
  data: RendimientoCiclo[];
}

const LoadVsPerformance = ({ data }: Props) => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="ciclo" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="creditos" fill="#8884d8" name="Créditos" />
      <Bar dataKey="promedio" fill="#82ca9d" name="Promedio" />
    </BarChart>
  </ResponsiveContainer>
);

export default LoadVsPerformance;

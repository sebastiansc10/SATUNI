import type { CursoJalado } from '@/types';

interface Props {
  data: CursoJalado[];
}

const agruparCursos = (data: CursoJalado[]) => {
  const agrupado = new Map<string, CursoJalado & { intentosTotales: number }>();

  data.forEach((curso) => {
    const key = `${curso.nombre}-${curso.codigo}`;
    const existente = agrupado.get(key);

    if (existente) {
      existente.intentosTotales += 1; // solo cuenta la aparición
    } else {
      agrupado.set(key, { ...curso, intentosTotales: 1 });
    }
  });

  return Array.from(agrupado.values());
};

const getEtiqueta = (intentos: number): { texto: string; clase: string } => {
  if (intentos >= 3) return { texto: `Jalado (P${intentos})`, clase: 'bg-red-100 text-red-700' };
  return { texto: `Jalado (P${intentos})`, clase: 'bg-yellow-100 text-yellow-700' };
};

const CoursesTimeline = ({ data }: Props) => {
  const cursosAgrupados = agruparCursos(data);

  return (
    <div className="space-y-3">
      {cursosAgrupados.map((curso, idx) => {
        const etiqueta = getEtiqueta(curso.intentosTotales);

        return (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-gray-800">{curso.nombre}</h4>
              <p className="text-sm text-gray-500">
                {curso.codigo} · Último ciclo: {curso.ciclo} · Créditos: {curso.creditos}
              </p>
              <p className="text-sm text-gray-500">
                Nota más reciente: {curso.nota} · Intentos: {curso.intentosTotales}
              </p>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${etiqueta.clase}`}>
              {etiqueta.texto}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CoursesTimeline;

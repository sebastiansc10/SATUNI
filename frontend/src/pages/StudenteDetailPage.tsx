import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchCursoCritico,
  fetchRendimientoPorCiclo,
  fetchCursosJalados,
  fetchStudents,
  fetchResumenCursos
} from '@/services/estudianteService';
import type {
  CursoCritico,
  RendimientoCiclo,
  CursoJalado,
  Student,
  CursosResumen
} from '@/types';

import CriticalCourseTrend from '@/components/student/CriticalCourseTrend';
import LoadVsPerformance from '@/components/student/LoadVsPerformance';
import CoursesTimeline from '@/components/student/CoursesTimeline';
import RiskBadge from '@/components/student/RiskBadge';

const StudentDetailPage = () => {
  const { studentId } = useParams();
  const [student, setStudent] = useState<Student | null>(null);
  const [cursoCritico, setCursoCritico] = useState<CursoCritico | null>(null);
  const [rendimiento, setRendimiento] = useState<RendimientoCiclo[]>([]);
  const [cursosJalados, setCursosJalados] = useState<CursoJalado[]>([]);
  const [resumenCursos, setResumenCursos] = useState<CursosResumen | null>(null);

  useEffect(() => {
    if (!studentId) return;

    fetchStudents().then((list) => {
      const found = list.find((s) => s.Id_estudiante === Number(studentId));
      setStudent(found || null);
    });

    fetchCursoCritico(Number(studentId)).then(setCursoCritico);
    fetchRendimientoPorCiclo(Number(studentId)).then(setRendimiento);
    fetchCursosJalados(Number(studentId)).then(setCursosJalados);
    fetchResumenCursos(Number(studentId)).then(setResumenCursos);
  }, [studentId]);

  if (!student) return <div className="p-6">Cargando estudiante...</div>;

  return (
    <div className="space-y-6 p-6">
      {/* 🧠 Cabecera del estudiante */}
      <div className="bg-white rounded-lg shadow-md p-4 space-y-1">
        <h1 className="text-2xl font-bold">{student.Nombre}</h1>
        <p className="text-sm text-gray-500">
          {student.Id_estudiante} – {student.Facultad} (Ciclo {student.Ciclo})
        </p>
        <RiskBadge score={0.82} />
      </div>

      {/* 🧮 Paneles Bikas/Trikas/Sin matrícula */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-orange-50 rounded-lg shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">Cursos Bika</p>
          <p className="text-xl font-bold text-orange-600">{resumenCursos?.bikas ?? 0}</p>
          <p className="text-xs text-orange-500">Seguir matrícula</p>
        </div>
        <div className="bg-red-50 rounded-lg shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">Cursos Trika</p>
          <p className="text-xl font-bold text-red-600">{resumenCursos?.trikas ?? 0}</p>
          <p className="text-xs text-red-500">Tercera matrícula</p>
        </div>
        <div className="bg-gray-100 rounded-lg shadow-md p-4 text-center">
          <p className="text-sm text-gray-500">Cursos sin matrícula</p>
          <p className="text-xl font-bold text-gray-700">{resumenCursos?.sinMatricula ?? 0}</p>
          <p className="text-xs text-gray-500">Pedidos inactivos</p>
        </div>
      </div>

      {/* 📈📊 Gráficos lado a lado */}
<div className="grid grid-cols-2 gap-4">
  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-lg font-semibold mb-2">Evolución – Curso más crítico</h2>
    {cursoCritico ? (
      <CriticalCourseTrend data={cursoCritico} />
    ) : (
      <p className="text-gray-500">No hay datos disponibles.</p>
    )}
  </div>

  <div className="bg-white rounded-lg shadow-md p-4">
    <h2 className="text-lg font-semibold mb-2">Carga académica vs desempeño</h2>
    {rendimiento.length > 0 ? (
      <LoadVsPerformance data={rendimiento} />
    ) : (
      <p className="text-gray-500">No hay datos disponibles.</p>
    )}
  </div>
</div>


      {/* 📋 Historial de cursos jalados */}
      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-lg font-semibold mb-2">Historial de cursos jalados</h2>
        {cursosJalados.length > 0 ? (
          <CoursesTimeline data={cursosJalados} />
        ) : (
          <p className="text-gray-500">No hay cursos jalados registrados.</p>
        )}
      </div>
    </div>
  );
};

export default StudentDetailPage;

export interface Student {
  Id_estudiante: number;
  Codigo: string;
  Nombre: string;
  Facultad: string;
  Ciclo: number;
  CRAEST: number;
  IRA: number;
  Bikas: number;
  Trikas: number;
  Promedio: number;
  UltimaConexion: string; // Puedes usar Date si haces parsing
  TotalCursos: number;
  CiclosMatriculados: number;
}



export interface Course {
  id: string;
  name: string;
  code: string;
  credits: number;
  attempts: number;
  cycle: string;
  grade?: number;
  status: 'aprobado' | 'bika' | 'trika' | 'retirado';
}

export interface Intervention {
  idEstudiante: number;
  tipo: string;
  canal: string;
  responsable: string;
  descripcion: string;
  fecha: string;
}


export interface ActionPlan {
  id: string;
  name: string;
  type: 'rescate' | 'emergencia';
  description: string;
  studentsCount: number;
  status: 'activo' | 'pausado' | 'completado';
  createdAt: string;
  responsiblePerson: string;
}

export interface Notification {
  id: string;
  type: 'email' | 'sms' | 'whatsapp';
  recipient: string;
  subject: string;
  message: string;
  status: 'enviado' | 'pendiente' | 'fallido';
  sentAt?: string;
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'administrador' | 'tutor' | 'psicologo';
  faculty?: string;
  avatar?: string;
}

export interface RiskCriteria {
  bikasThreshold: number;
  trikasThreshold: number;
  cyclesWithoutEnrollmentThreshold: number;
  gpaThreshold: number;
}
export interface CursoCritico {
  curso: string;
  intentos: {
    ciclo: string;
    nota: number;
  }[];
}

export interface RendimientoCiclo {
  ciclo: string;
  creditos: number;
  promedio: number;
}

export interface CursoJalado {
  nombre: string;
  codigo: string;
  ciclo: string;
  creditos: number;
  nota: number;
  intentos: number;
}
export interface CursosResumen {
  bikas: number;
  trikas: number;
  sinMatricula: number;
}
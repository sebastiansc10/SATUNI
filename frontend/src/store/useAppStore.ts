import { create } from 'zustand';
import { User, RiskCriteria } from '@/types';

interface AppState {
  currentUser: User | null;
  isAuthenticated: boolean;
  riskCriteria: RiskCriteria;
  setCurrentUser: (user: User | null) => void;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateRiskCriteria: (criteria: Partial<RiskCriteria>) => void;
}

const defaultRiskCriteria: RiskCriteria = {
  bikasThreshold: 2,
  trikasThreshold: 1,
  cyclesWithoutEnrollmentThreshold: 2,
  gpaThreshold: 10.5
};

const defaultUser: User = {
  id: '1',
  name: 'Administrador Sistema',
  email: 'admin@uni.edu.pe',
  role: 'administrador',
  avatar: undefined
};

export const useAppStore = create<AppState>((set) => ({
  currentUser: null,
  isAuthenticated: false,
  riskCriteria: defaultRiskCriteria,
  setCurrentUser: (user) => set({ currentUser: user }),
  login: (email: string, password: string) => {
    // Credenciales demo
    if (email === 'admin@uni.edu.pe' && password === 'admin123') {
      set({ 
        currentUser: defaultUser, 
        isAuthenticated: true 
      });
      return true;
    }
    return false;
  },
  logout: () => set({ 
    currentUser: null, 
    isAuthenticated: false 
  }),
  updateRiskCriteria: (criteria) =>
    set((state) => ({
      riskCriteria: { ...state.riskCriteria, ...criteria }
    })),
}));
// Wrapper HTTP para futuras llamadas a API real
// Por ahora solo configuración mock

const API_BASE_URL = 'https://api.sat-uni.edu.pe/v1';

class SatUniApi {
  private baseUrl: string;

  constructor(baseUrl: string = API_BASE_URL) {
    this.baseUrl = baseUrl;
  }

  async get<T>(endpoint: string): Promise<T> {
    // Mock implementation
    console.log(`GET ${this.baseUrl}${endpoint}`);
    throw new Error('API not implemented yet');
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    // Mock implementation
    console.log(`POST ${this.baseUrl}${endpoint}`, data);
    throw new Error('API not implemented yet');
  }

  async put<T>(endpoint: string, data: any): Promise<T> {
    // Mock implementation
    console.log(`PUT ${this.baseUrl}${endpoint}`, data);
    throw new Error('API not implemented yet');
  }

  async delete<T>(endpoint: string): Promise<T> {
    // Mock implementation
    console.log(`DELETE ${this.baseUrl}${endpoint}`);
    throw new Error('API not implemented yet');
  }
}

export const satUniApi = new SatUniApi();
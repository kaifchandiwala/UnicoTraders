// User Roles (Roadmap Phase 0.8 / 1.1)
export type UserRole = 'CUSTOMER' | 'STAFF' | 'ADMIN';

// Health check API response contract
export interface HealthResponse {
  status: 'ok';
  uptime: number;
  timestamp: string;
}
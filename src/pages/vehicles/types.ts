export type VehicleStatus = 'available' | 'rented' | 'maintenance' | 'retired';

export interface VehicleFormData {
  make: string;
  model: string;
  type: string;
  year: number;
  color: string;
  licensePlate: string;
  vinNumber: string;
  currentMileage: number;
  status: VehicleStatus;
  insurance: {
    provider: string;
    policyNumber: string;
    expiryDate: string;
    coverage: string;
  };
  technicalInspection: {
    date: string;
    expiryDate: string;
    status: 'passed' | 'failed' | 'pending';
    notes: string;
  };
}
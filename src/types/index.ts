// User Types
export interface User {
  id: string;
  email: string;
  role: 'admin' | 'staff' | 'manager';
  name: string;
}

// Customer Types
export interface Customer {
  id: string;
  fullName: string;
  dateOfBirth: string;
  birthplace: string;
  nationality: string;
  idCardNumber: string;
  idCardIssueDate: string;
  driverLicenseNumber: string;
  driverLicenseExpiry: string;
  address: string;
  phoneNumber: string;
  email: string;
  documents: Document[];
  createdAt: string;
  updatedAt: string;
}

export interface Document {
  id: string;
  type: 'id_card' | 'driver_license' | 'other';
  url: string;
  uploadedAt: string;
}

// Vehicle Types
export interface Vehicle {
  id: string;
  make: string;
  model: string;
  type: string;
  year: number;
  color: string;
  licensePlate: string;
  vinNumber: string;
  currentMileage: number;
  status: 'available' | 'rented' | 'maintenance' | 'retired';
  maintenanceHistory: MaintenanceRecord[];
  insurance: Insurance;
  technicalInspection: TechnicalInspection;
  photos: string[];
}

export interface MaintenanceRecord {
  id: string;
  date: string;
  type: string;
  description: string;
  cost: number;
  mileage: number;
  nextServiceDue: string;
}

export interface Insurance {
  provider: string;
  policyNumber: string;
  expiryDate: string;
  coverage: string;
}

export interface TechnicalInspection {
  date: string;
  expiryDate: string;
  status: 'passed' | 'failed' | 'pending';
  notes: string;
}

// Rental Types
export interface RentalContract {
  id: string;
  customerId: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  returnLocation: string;
  dailyRate: number;
  securityDeposit: number;
  primaryDriver: Driver;
  secondaryDrivers: Driver[];
  startMileage: number;
  endMileage?: number;
  additionalCharges: Charge[];
  status: 'active' | 'completed' | 'cancelled';
  signature: string;
  totalAmount: number;
  paymentStatus: 'pending' | 'partial' | 'completed';
}

export interface Driver {
  fullName: string;
  driverLicenseNumber: string;
  driverLicenseExpiry: string;
}

export interface Charge {
  description: string;
  amount: number;
  type: 'damage' | 'late_return' | 'fuel' | 'other';
}
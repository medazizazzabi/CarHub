export type RentalStatus = 'active' | 'completed' | 'cancelled';

export interface RentalFormData {
  customerId: string;
  vehicleId: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  returnLocation: string;
  dailyRate: number;
  securityDeposit: number;
  primaryDriver: {
    fullName: string;
    driverLicenseNumber: string;
    driverLicenseExpiry: string;
  };
  additionalDrivers: Array<{
    fullName: string;
    driverLicenseNumber: string;
    driverLicenseExpiry: string;
  }>;
}
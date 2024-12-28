export interface CustomerFormData {
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
}

export interface Document {
  id: string;
  type: 'id_card' | 'driver_license' | 'other';
  url: string;
  uploadedAt: string;
}
# Car Rental Management System Design Specification

## 1. Customer Information Management

### Database Table: customers

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| customer_id | INT (PK) | Unique identifier for each customer |
| full_name | VARCHAR(100) | Customer's complete name |
| date_of_birth | DATE | Customer's birth date |
| place_of_birth | VARCHAR(100) | Customer's birth place |
| nationality | VARCHAR(50) | Customer's nationality |
| id_card_number | VARCHAR(50) | National ID card number |
| id_card_issue_date | DATE | ID card issuance date |
| license_number | VARCHAR(50) | Driver's license number |
| license_issue_date | DATE | License issuance date |
| address | TEXT | Current living address |
| phone_number | VARCHAR(20) | Primary contact number |

## 2. Vehicle Management

### Database Table: vehicles

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| vehicle_id | INT (PK) | Unique identifier for each vehicle |
| model | VARCHAR(50) | Vehicle model name |
| license_plate | VARCHAR(20) | Vehicle registration number |
| current_mileage | INT | Current odometer reading |
| insurance_expiry | DATE | Insurance validity end date |
| inspection_expiry | DATE | Technical inspection validity end date |
| vehicle_condition | ENUM | Current state (Available, Rented, Maintenance) |

## 3. Rental Contract Management

### Database Table: rental_contracts

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| contract_id | INT (PK) | Unique contract identifier |
| pickup_date | DATETIME | Vehicle collection date and time |
| pickup_location | VARCHAR(100) | Collection point |
| return_date | DATETIME | Expected return date and time |
| return_location | VARCHAR(100) | Return point |
| security_deposit | DECIMAL(10,2) | Security deposit amount |
| daily_rate | DECIMAL(10,2) | Daily rental charge |
| rental_duration | INT | Total rental days |
| start_kilometer | INT | Initial odometer reading |
| end_kilometer | INT | Final odometer reading |
| extra_kilometers | INT | Additional kilometers driven |
| vehicle_id | INT (FK) | Reference to vehicles table |
| primary_driver_id | INT (FK) | Reference to customers table |
| secondary_driver_id | INT (FK) | Reference to customers table |
| condition_report | TEXT | Vehicle condition notes |
| base_price | DECIMAL(10,2) | Rental cost before tax |
| stamp_duty | DECIMAL(10,2) | Applicable stamp duty |
| vat_percentage | DECIMAL(5,2) | VAT rate |
| total_price | DECIMAL(10,2) | Final invoice amount |
| created_at | TIMESTAMP | Contract creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

## 4. User Authentication System

### Database Table: users

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| user_id | INT (PK) | Unique user identifier |
| username | VARCHAR(50) | Login username |
| password_hash | VARCHAR(255) | Encrypted password |
| role | ENUM | User role (Admin, Staff) |

# Car Rental Management System Design Specification

## 1. Features

<details>
    <summary>Core Features</summary>
    
    1. Customer Management
        - Customer CRUD operations
        - Customer history tracking

    2. Vehicle Management
        - Inventory tracking
        - Vehicle status monitoring (Available, Rented, Maintenance)
        - Mileage tracking

    3. Rental Contract Management
        - Contract creation and modification
        - Pricing calculation with taxes
        - Security deposit handling
        - Multi-location pickup and return
        - Condition reporting
        - Kilometer tracking
        - Invoice generation

    4. User Management
        - Two-role system (Admin and Worker)
        - Secure authentication
        - Activity logging
        - Role-based permissions
</details>

<details>
    <summary>Additional Features</summary>

    1. Reporting
        - Rental statistics
        - Business performance analysis

    2. Notifications
        - Use WhatsApp API to send notifications
        - Notify Admin a week before the insurance & inspection expiry date
        - Notify Admin 2 days before the rental contract ends
        - Notify Admin when a vehicle is returned
        - Notify Admin when a vehicle is rented
</details>

## 2 User Stories

#### **Worker :**
- As a Worker, I want to register new customers so that they can rent vehicles
- As a Worker, I want to check vehicle availability so that I can make reservations
- As a Worker, I want to create rental contracts so that customers can rent vehicles
- As a Worker, I want to process vehicle returns so that I can close rental contracts
- As a Worker, I want to record vehicle condition so that damages can be tracked
- As a Worker, I want to calculate rental charges so that customers can be billed correctly
- As a Worker, I want to update vehicle status so that availability is accurate
- As a Worker, I want to handle security deposits
- As a Worker, I want to generate invoices so that customers can pay and sign

#### **Administrator :**
- As an admin, I want to view rental statistics so that I can analyze business performance
- As an admin, I want to manage vehicle inventory so that I can maintain fleet information
- As an admin, I want to set pricing rules so that rental rates are consistent
- As an admin, I want to generate reports so that I can monitor business operations
- As an admin, I want to monitor Worker activities so that I can ensure proper system usage
- As an admin, I want to handle system configurations so that business rules are properly implemented
- As an admin, I want to manage maintenance schedules so that vehicles are properly maintained

## 2. Database Design

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
| created_at | TIMESTAMP | Record creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

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
| created_at | TIMESTAMP | Record creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

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
| payment_method | ENUM | Payment type (Cash, Credit Card, Check) |
| payment_status | ENUM | Payment status (Paid, Unpaid) |
| created_at | TIMESTAMP | Contract creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

### Database Table: users

| Field Name | Data Type | Description |
|------------|-----------|-------------|
| user_id | INT (PK) | Unique user identifier |
| username | VARCHAR(50) | Login username |
| password_hash | VARCHAR(255) | Encrypted password |
| role | ENUM | User role (Admin, Staff) |
| created_at | TIMESTAMP | Account creation timestamp |
| updated_at | TIMESTAMP | Last update timestamp |

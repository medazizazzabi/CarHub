-- Table: customers
CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    date_of_birth DATE NOT NULL,
    place_of_birth VARCHAR(100),
    nationality VARCHAR(50),
    id_card_number VARCHAR(50) UNIQUE NOT NULL,
    id_card_issue_date DATE,
    license_number VARCHAR(50) UNIQUE,
    license_issue_date DATE,
    address TEXT,
    phone_number VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Table: vehicles
CREATE TABLE vehicles (
    vehicle_id INTEGER PRIMARY KEY,
    model VARCHAR(50) NOT NULL,
    license_plate VARCHAR(20) UNIQUE NOT NULL,
    current_mileage INTEGER NOT NULL,
    insurance_expiry DATE NOT NULL,
    inspection_expiry DATE NOT NULL,
    vehicle_condition TEXT NOT NULL CHECK(vehicle_condition IN ('Available', 'Rented', 'Maintenance')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table: rental_contracts
CREATE TABLE rental_contracts (
    contract_id INTEGER PRIMARY KEY,
    pickup_date DATETIME NOT NULL,
    pickup_location VARCHAR(100) NOT NULL,
    return_date DATETIME NOT NULL,
    return_location VARCHAR(100) NOT NULL,
    security_deposit DECIMAL(10, 2) NOT NULL,
    daily_rate DECIMAL(10, 2) NOT NULL,
    rental_duration INTEGER NOT NULL,
    start_kilometer INTEGER NOT NULL,
    end_kilometer INTEGER,
    extra_kilometers INTEGER,
    vehicle_id INTEGER NOT NULL,
    primary_driver_id INTEGER NOT NULL,
    secondary_driver_id INTEGER,
    condition_report TEXT,
    base_price DECIMAL(10, 2) NOT NULL,
    stamp_duty DECIMAL(10, 2) NOT NULL,
    vat_percentage DECIMAL(5, 2) NOT NULL,
    total_price DECIMAL(10, 2) NOT NULL,
    payment_method TEXT NOT NULL CHECK(payment_method IN ('Cash', 'Credit Card', 'Check')),
    payment_status TEXT NOT NULL CHECK(payment_status IN ('Paid', 'Unpaid')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (vehicle_id) REFERENCES vehicles(vehicle_id),
    FOREIGN KEY (primary_driver_id) REFERENCES customers(customer_id),
    FOREIGN KEY (secondary_driver_id) REFERENCES customers(customer_id)
);

-- Table: users
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('Admin', 'Staff')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
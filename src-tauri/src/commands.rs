use tauri::command;
use crate::database::{insert_vehicle, get_vehicles};

#[command]
pub fn add_vehicle(model: String, license_plate: String, current_mileage: i32, insurance_expiry: String, inspection_expiry: String, vehicle_condition: String) {
    insert_vehicle(&model, &license_plate, current_mileage, &insurance_expiry, &inspection_expiry, &vehicle_condition)
        .expect("Failed to insert vehicle");
}

#[command]
pub fn list_vehicles() -> Vec<(i32, String, String)> {
    get_vehicles().expect("Failed to fetch vehicles")
}

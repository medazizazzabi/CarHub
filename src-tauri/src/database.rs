use rusqlite::{params, Connection, Result};

pub fn establish_connection() -> Result<Connection> {
    let conn = Connection::open("rentals.db")?;  // Replace with your DB file path
    Ok(conn)
}

pub fn insert_vehicle(model: &str, license_plate: &str, current_mileage: i32, insurance_expiry: &str, inspection_expiry: &str, vehicle_condition: &str) -> Result<()> {
    let conn = establish_connection()?;
    conn.execute(
        "INSERT INTO vehicles (model, license_plate, current_mileage, insurance_expiry, inspection_expiry, vehicle_condition) VALUES (?1, ?2, ?3, ?4, ?5, ?6)",
        params![model, license_plate, current_mileage, insurance_expiry, inspection_expiry, vehicle_condition],
    )?;
    Ok(())
}

pub fn get_vehicles() -> Result<Vec<(i32, String, String)>> {
    let conn = establish_connection()?;
    let mut stmt = conn.prepare("SELECT vehicle_id, model, license_plate FROM vehicles")?;
    let vehicles = stmt.query_map([], |row| {
        Ok((
            row.get(0)?, // vehicle_id
            row.get(1)?, // model
            row.get(2)?, // license_plate
        ))
    })?;

    let mut result = Vec::new();
    for vehicle in vehicles {
        result.push(vehicle?);
    }
    Ok(result)
}

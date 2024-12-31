// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod database;
mod commands;

use tauri::Builder;
use commands::{add_vehicle, list_vehicles};

fn main() {
    Builder::default()
        .invoke_handler(tauri::generate_handler![add_vehicle, list_vehicles]) // Exposes the commands
        .run(tauri::generate_context!())  // Runs the Tauri application
        .expect("error while running tauri application");
}

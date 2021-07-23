#![cfg_attr(
  all(not(debug_assertions), target_os = "windows"),
  windows_subsystem = "windows"
)]

#[tauri::command]
fn authenticate(master_password: String) -> Result<String, String> {
  println!("recieved master password: {}", master_password);
  //Err("Authentication failed!".into())
  return Ok("Authentication succeeded".into());
}

fn main() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![authenticate])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

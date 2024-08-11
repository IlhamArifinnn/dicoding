try {
  console.log("Memulai program");
  throw new Error("Error: Program berhenti");
  console.log("Mengakhiri program");
} catch (err) {
  console.log("Karena tidak ada error, blok ini akan diabaikan");
} finally {
  console.log("Ini finally block");
}

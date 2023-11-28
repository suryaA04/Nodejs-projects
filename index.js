const XLSX = require('xlsx');
const fs = require('fs');

// Function to read data from an Excel file
function readExcel(filePath) {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  return data;
}

// Function to write data to an Excel file
function writeExcel(filePath, data) {
  const worksheet = XLSX.utils.aoa_to_sheet(data);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  XLSX.writeFile(workbook, filePath);
}

// Example usage: Read data from an Excel file
const importedData = readExcel('Book1.xlsx');
console.log('Imported Data:', importedData);

// Example usage: Write data to an Excel file
const dataToExport = [
  ['Name', 'Age', 'Email'],
  ['John Doe', 30, 'john@example.com'],
  ['Jane Smith', 28, 'jane@example.com'],
  // Add more rows as needed
];

writeExcel('output.xlsx', dataToExport);

const xlsx = require('xlsx');
const workbook = xlsx.readFile('/home/vyshak/Downloads/Copy of Event_Forms_manager.xlsx');
const sheetName = workbook.SheetNames[0];
const data = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName]);
console.log(data);

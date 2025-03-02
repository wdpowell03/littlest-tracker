import axios from 'axios';

const fetchSheetData = async () => {
  const sheetId = 'your-sheet-id'; 
  const apiKey = 'your-api-key';   
  const range = 'Sheet1!A1:D10';   

  try {
    const response = await axios.get(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
    );
    
    const data = response.data.values;  // This is the data from your Google Sheet
    console.log(data);
    
    // You can now set this data in your state or render it in your component
  } catch (error) {
    console.error('Error fetching sheet data:', error);
  }
};
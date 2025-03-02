import axios from 'axios';

const fetchSheetData = async () => {
  const sheetId = process.env.REACT_APP_GOOGLE_SHEET_ID;
  const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
  const range = 'Sheet1';

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
import axios from 'axios';

const fetchSheetData = async () => {
  const sheetId = '1Bzme5HbQjKD1qa2-qfRHGMqpiE58NxgGNNVXATaA_BM';
  const apiKey = 'AIzaSyBjGRDGH8J-8JHZPMYdblH5m0O2TwNxn_M';
  const range = '';

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
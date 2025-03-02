import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetData from './petData'; // Import the PetData component

const SearchDashboard = () => {
    const [sheetData, setSheetData] = useState([]); // State for holding sheet data
    const [loading, setLoading] = useState(false);  // Loading state
    const [error, setError] = useState(null);  // Error state
    const [searchNumber, setSearchNumber] = useState(''); // Search by Number
    const [searchType, setSearchType] = useState(''); // Search by Type
    const [searchPriority, setSearchPriority] = useState(''); // Search by Priority
    const [searchImg, setSearchImg] = useState(''); // Search by Img

    const fetchSheetData = async () => {
        const sheetId = process.env.REACT_APP_GOOGLE_SHEET_ID;
        const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
        const range = 'Sheet1';

        setLoading(true);

        try {
            const response = await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
            );
            setSheetData(response.data.values || []); // Store fetched data
        } catch (error) {
            setError('Error fetching sheet data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSheetData(); // Fetch sheet data when the component mounts
    }, []);

    // Filter data based on the search inputs for each column
    const filteredData = sheetData.filter((row) => {
        return (
            (searchNumber === '' || row[0].toLowerCase().includes(searchNumber.toLowerCase())) &&
            (searchType === '' || row[1].toLowerCase().includes(searchType.toLowerCase())) &&
            (searchPriority === '' || row[2].toLowerCase().includes(searchPriority.toLowerCase())) &&
            (searchImg === '' || row[3].toLowerCase().includes(searchImg.toLowerCase()))
        );
    });

    return (
        <div>
            <h1>Search Dashboard</h1>

            {/* Search Inputs */}
            <div>
                <input
                    type="text"
                    value={searchNumber}
                    onChange={(e) => setSearchNumber(e.target.value)}
                    placeholder="Search by Number"
                />
                <input
                    type="text"
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    placeholder="Search by Type"
                />
                <input
                    type="text"
                    value={searchPriority}
                    onChange={(e) => setSearchPriority(e.target.value)}
                    placeholder="Search by Priority"
                />
                <input
                    type="text"
                    value={searchImg}
                    onChange={(e) => setSearchImg(e.target.value)}
                    placeholder="Search by Img"
                />
            </div>

            {/* Loading, Error, and Data Display */}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            {/* Pass filtered data to the PetData component */}
            <PetData data={filteredData} />
        </div>
    );
};

export default SearchDashboard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PetData from './petData';
import './SearchDash.css';

const SearchDash = () => {
    const [sheetData, setSheetData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [searchNumber, setSearchNumber] = useState('');
    const [searchType, setSearchType] = useState('');
    const [searchPriority, setSearchPriority] = useState('');

    const [filteredData, setFilteredData] = useState([]);

    const fetchSheetData = async () => {
        const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID;
        const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
        const range = 'Sheet1';

        setLoading(true);

        try {
            const response = await axios.get(
                `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`
            );
            setSheetData(response.data.values || []);
        } catch (error) {
            setError('Error fetching sheet data: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSheetData();
    }, []);

    const handleSearch = () => {

        const filtered = sheetData.filter((row) => {
            return (
                row &&
                (searchNumber === '' || (row[0] && row[0].toLowerCase().includes(searchNumber.toLowerCase()))) &&
                (searchType === '' || (row[1] && row[1].toLowerCase().includes(searchType.toLowerCase()))) &&
                (searchPriority === '' || (row[2] && row[2].toLowerCase().includes(searchPriority.toLowerCase())))
            );
        });
        setFilteredData(filtered);
    };

    return (
        <div>
            <h1>Search Dashboard</h1>


            <div className="search-inputs">
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
                <button onClick={handleSearch}>Search</button>
            </div>


            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}


            <PetData data={filteredData} />
        </div>
    );
};

export default SearchDash;
import React from 'react';

const PetData = ({ data }) => {
    return (
        <div>
            <h1>My Littlest Pets</h1>

            {data.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Number</th>
                            <th>Type</th>
                            <th>Priority</th>
                            <th>Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr key={index}>
                                <td>{row[0]}</td>
                                <td>{row[1]}</td>
                                <td>{row[2]}</td>
                                <td>
                                    {row[3] ? (
                                        <img src={row[3]} alt={`Pet ${row[0]}`} style={{ width: '100px', height: '100px' }} />
                                    ) : (
                                        'No Image'
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No data available.</p>
            )}
        </div>
    );
};

export default PetData;
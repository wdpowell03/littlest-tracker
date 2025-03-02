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
                                {row.map((cell, idx) => (
                                    <td key={idx}>{cell}</td>
                                ))}
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
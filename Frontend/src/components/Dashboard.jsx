import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {

    const [logs, setLogs] = useState([]);

    const fetchLogs = async () => {

        try {

            const response = await axios.get(
                'https://web-application-firewalls.onrender.com/logs'
            );

            setLogs(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchLogs();
    }, []);

    return (
        <div>

            <h2>Blocked Attacks</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>IP</th>
                        <th>URL</th>
                        <th>Attack Type</th>
                        <th>Time</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        logs.map((log, index) => (
                            <tr key={index}>
                                <td>{log.ip}</td>
                                <td>{log.url}</td>
                                <td>{log.attackType}</td>
                                <td>
                                    {new Date(log.timestamp).toLocaleString()}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
}

export default Dashboard;
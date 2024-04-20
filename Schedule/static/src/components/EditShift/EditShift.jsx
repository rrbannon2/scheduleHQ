import React, { useState, useEffect } from 'react';
import ShiftPage from '../ShiftPage/ShiftPage';
import FetchComponent from '../FetchComponent/FetchComponent';
import { useLocation } from 'react-router-dom';

const EditShiftPage = () => {

    const [fetchedInfo, setFetchedInfo] = useState(null);
    let dataID = { "dataID": useLocation().state };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchComponent(dataID, "GET", "/loadShiftInfo","shift");
                setFetchedInfo(data[0]);
            } catch (error) {
                console.error("Error fetching shift data", error);
                // Handle the error accordingly
            }
        };

        fetchData();
    }, []);

    // Render component only when empInfo is available
    return (
        fetchedInfo && <ShiftPage addNew={false} existingInfo={fetchedInfo} />
    );
};

export default EditShiftPage;
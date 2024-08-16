import React, { useState, useEffect } from "react";

const LocationProvider = ({ onLocationChange }) => {
    const [location, setLocation] = useState(null);

    useEffect(() => {
        const storedLocation = JSON.parse(localStorage.getItem('userLocation'));
        if (storedLocation) {
            setLocation(storedLocation);
            onLocationChange(storedLocation);
            return;
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    const userLocation = { latitude, longitude };
                    setLocation(userLocation);
                    localStorage.setItem('userLocation', JSON.stringify(userLocation));
                    onLocationChange(userLocation);
                },
                (error) => {
                    console.error("Error getting location: ", error);
                },
                { enableHighAccuracy: true }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, [onLocationChange]);

    return null;
};

export default LocationProvider;

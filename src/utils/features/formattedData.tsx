import React from 'react';

const formattedData = (startDate: Date) => {
    return ("0" + startDate.getDate()).slice(-2) + "-" + ("0"+(startDate.getMonth()+1)).slice(-2) + "-" +
        startDate.getFullYear() + " " + ("0" + startDate.getHours()).slice(-2) + ":" + ("0" + startDate.getMinutes()).slice(-2)

};

export default formattedData;

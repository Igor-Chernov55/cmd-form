import React, {FC} from 'react';
import {addDays, subDays} from "date-fns";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";
import DatePicker from "react-datepicker";

type PickerPropsType = {
    startDate: Date,
    setStartDate: (date: any) => void
}

const DateBlock: FC<PickerPropsType> = ({startDate, setStartDate}) => {
    return (
        <div>
            <p className='mb-2'>Дата и время посещения</p>
            <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                includeDateIntervals={[
                    {start: subDays(new Date(), 1), end: addDays(new Date(), 30)},
                ]}
                showTimeSelect
                includeTimes={[
                    setHours(setMinutes(new Date(), 0), 17),
                    setHours(setMinutes(new Date(), 30), 18),
                    setHours(setMinutes(new Date(), 30), 19),
                    setHours(setMinutes(new Date(), 30), 17),
                ]}
                dateFormat="d.MM.yyyy h:mm aa"
            />
        </div>
    );
};

export default DateBlock;

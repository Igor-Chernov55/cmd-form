import React, {FC} from 'react';
import {AddressSuggestions} from "react-dadata";
import {CommonProps} from "react-dadata/dist/types";

const AddressForm: FC<CommonProps<any>> = ({value, onChange,token, ...props}) => {

    return (
        <div className='mb-3 mt-3'>
            <p className='mb-2'>Выбирете адрес(необязательно)</p>
            <AddressSuggestions
                token={token}
                value={value}
                onChange={onChange}
                hintText={'Введите подходящйй адрес'}
            />
        </div>
    );
};

export default AddressForm;

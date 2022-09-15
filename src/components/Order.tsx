import React from 'react';
import {useAppSelector} from "../utils/hooks/hooks";
import {translit} from "../utils/features/translitionText";

const Order = () => {


    const state = useAppSelector((state) => state.order)

    return (
        <div className='d-flex justify-content-center mt-5'>

            <div className='d-flex flex-column w-25 h-25'>
                <h2>Информация по заявке</h2>
                <ul className='list-group'>
                    <li className='list-group-item'> ФИО: {translit(state.fullName)}</li>
                    <li className='list-group-item'> Возраст: {state.age}</li>
                    <li className='list-group-item'>Email: {state.email}</li>
                    <li className='list-group-item'> Дата и время: {state.data}</li>
                    <li className='list-group-item'>Адрес: {state.address && translit(state.address)}</li>
                </ul>
            </div>
        </div>
    );
};

export default Order;

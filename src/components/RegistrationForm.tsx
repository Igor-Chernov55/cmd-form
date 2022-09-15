import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Formik} from "formik";
import {setDefaultLocale} from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import setMinutes from "date-fns/setMinutes";
import 'react-dadata/dist/react-dadata.css';
import {initialValue} from "../utils/initialValueRegistration";
import {validationSchema} from "../utils/validationSchema";
import AddressForm from "../layOut/AddressSuggestion";
import DateBlock from "../layOut/DateBlock";
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../utils/hooks/hooks";
import {setAddress, setData, setOrder} from "../store/slices/sliceOrder";
import formattedData from "../utils/features/formattedData";

setDefaultLocale('ru')

const RegistrationForm = () => {
    const [valueAddress, setValueAddress] = useState();
    const [startDate, setStartDate] = useState(setMinutes(new Date(), 30));
    const navigate = useNavigate();
    const dispatch = useAppDispatch()

    return (
        <div className='d-flex justify-content-center mt-5 '>
            <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    dispatch(setOrder(values))
                    dispatch(setData(formattedData(startDate)))
                    navigate("/order")
                    alert('Ваша заявка успешно создана')
                }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                    <Form onSubmit={handleSubmit} className='d-flex flex-column w-25'>
                        <h1>Заполните форму заявки</h1>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Введите ФИО</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='fullName'
                                value={values.fullName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="ФИО"
                                isValid={touched.fullName && !errors.fullName}
                            />
                            {errors.fullName && <p className={'text-danger'}>{errors.fullName}</p>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Ваш возраст</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                name='age'
                                value={values.age}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="возраст"
                                isValid={touched.age && !errors.age}
                            />
                            {errors.age && <p className={'text-danger'}>{errors.age}</p>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Email"
                                isValid={touched.email && !errors.email}
                            />
                            {errors.age && <p className={'text-danger'}>{errors.email}</p>}
                        </Form.Group>

                        <DateBlock
                            startDate={startDate}
                            setStartDate={setStartDate}
                        />

                        <AddressForm
                            value={valueAddress}
                            defaultQuery={'Москва'}
                            onChange={(suggestion) => {
                                dispatch(setAddress(suggestion?.value))
                            }}
                            token={'8d8524af61c133565bf8b94edb6a302b1162ce1d'}
                        />
                        <Button
                            variant='success'
                            type='submit'
                        >
                            Отправить данные
                        </Button>
                    </Form>
                )}
            </Formik>


        </div>
    );
};

export default RegistrationForm;

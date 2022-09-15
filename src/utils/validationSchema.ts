import * as yup from "yup";

export const validationSchema = yup.object().shape({
    fullName: yup.string().required('Обязательное поле').matches(/^[А-Я, а-я]+$/, "Имя должно быть строчными, русскими буквами").test('is-full-name', 'Необходимо ввести как минимум ваше Имя и Фамилию', function (value: any) {
        const nameArr = value.split(" ");
        return nameArr.length >= 2;
    }).required(),
    age: yup.number().min(0).max(150).typeError('Возраст необходимо указать числом').required('Обязательное поле'),
    email: yup.string().email('Введите корректный email').required('Обязательное поле')
})

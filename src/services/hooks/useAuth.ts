import * as yup from "yup";
import {FormikHelpers} from "formik";

type TSignIn = {
    email: string,
    password: string
}

export default function useAuth() {
    const validation = yup.object().shape({
        email: yup.string().required('Обязательное поле').email('Неправильный email'),
        password: yup.string().required('Обязательное поле').min(6, 'Пароль должен быть не меньше 6 символов'),
    });

    const initialValues: TSignIn = {
        email: '',
        password: '',
    }

    const handleSignIn = (values: TSignIn, {resetForm}: FormikHelpers<TSignIn>) => {
        console.log(values)
        resetForm()
    }

    return {validation, initialValues, handleSignIn}
}
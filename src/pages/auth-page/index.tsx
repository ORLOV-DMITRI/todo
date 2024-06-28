import styles from './styles.module.scss';
import LogoIcon from "@/assets/svg/ToDoDo.svg?react";
import RecordIcon from "@/assets/svg/record.svg?react";
import {Form, Formik} from "formik";
import {Button} from "@/components/ui/Button";
import useAuth from '@/services/hooks/useAuth';
import Input from "@/components/ui/Input";


export default function AuthPage() {

    const {initialValues, validation, handleSignIn} = useAuth()

    return (
        <div className={styles.authPage}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <div className={styles.decor}>
                        <RecordIcon/>
                    </div>
                    <div className={styles.logoText}>
                        <LogoIcon/>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.title}>
                        Войдите, чтобы продолжить
                    </div>
                    <Formik initialValues={initialValues} onSubmit={handleSignIn} validationSchema={validation}>
                        <Form className={styles.fields}>
                            <Input label={'Email'} type={'email'} name={'email'} placeholder={'email@example.com'}/>
                            <Input label={'Пароль'} type={'password'} name={'password'} placeholder={'*******'}/>
                            <Button size={'full'}>Войти</Button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
};


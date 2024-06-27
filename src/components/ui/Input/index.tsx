import styles from './Input.module.scss'
import {FieldHookConfig, useField} from "formik";
import cn from "classnames";

type UiInputType = {
    label?: string
    className?: string
} & React.InputHTMLAttributes<HTMLInputElement>

export default function Input({label, className, ...props}: UiInputType & FieldHookConfig<string>) {
    const [field, {error, touched}] = useField(props);
    return (
        <div className={cn(styles.field, className, error && touched && error && styles.field_error)}>
            <label htmlFor='field'>
                {label}
            </label>
            <input maxLength={props.maxLength} type={props.type} {...field} name={props.name}
                   placeholder={props.placeholder}
                   className={styles.input}/>
            <div className={styles.error}>{error && touched && error}</div>
        </div>
    )
}
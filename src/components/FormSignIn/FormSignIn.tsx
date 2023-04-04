import React, { useEffect, useState } from 'react';
import styles from './FormSignIn.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { setAuthorized, getUsers } from '../../redux/slices/registrationSlice';
import { useNavigate } from 'react-router-dom';
import { IUser } from '../../types';
import { changeVisible } from '../../redux/slices/modalSlice';

const FormSignIn = () => {
    const theme = useAppSelector(store => store.theme.value);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [users, setUsers] = useState<IUser[]>([]);
    const [form, setForm] = useState({
        email: '',
        password: '',
    });
    const [isValidForm, setFormValid] = useState(true);

    useEffect(() => {
        (async () => {
            const users = await dispatch(getUsers());
            setUsers(users.payload);
            dispatch(setAuthorized(false));
        })()
    }, []);

    const handleSubmitForm = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user = users.find((user: IUser) => user.email === form.email && user.password === form.password);
        if (user) {
            dispatch(setAuthorized(true));
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        } else {
            dispatch(changeVisible());
            setFormValid(false);
        }
    };

    return (
        <form noValidate={true} onSubmit={handleSubmitForm} 
        className=
        {`
        ${styles.container}
        ${!isValidForm ? styles.needValidation : ''}
        ${theme === 'dark' ? styles.containerDark : ''}
        `
        }>
            <div>
                <div className={styles.input}>
                    <div className={styles.label}>Email</div>
                    <input type="email" placeholder="Your email" value={form.email} required minLength={6} onChange={(event: any) => setForm({ ...form, email: event.target.value })} />
                    <div className={styles.error}>Error email</div>
                </div>
                <div className={styles.input}>
                    <div className={styles.label}>Password</div>
                    <input type="password" placeholder="Your password" value={form.password} required minLength={8} onChange={(event: any) => setForm({ ...form, password: event.target.value })} />
                    <div className={styles.error}>Error password</div>
                </div>
            </div>
            <div className={styles.text}>Forgot password?</div>
            <button type='submit' className={styles.button}>Sign In</button>
            <div className={styles.footer}>
                <p>Don’t have an account? </p>
                <p><span>Sign Up</span></p>
            </div>
        </form>
    );
};

export default FormSignIn;
import React, { useEffect, useState } from 'react';
import styles from './FormSignUp.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { useNavigate } from 'react-router-dom';
import { authApi } from '../../api';
import { IUser } from '../../types';
import { getUsers, setAuthorized } from '../../redux/slices/registrationSlice';
import { changeVisible } from '../../redux/slices/modalSlice';

const FormSignUp = () => {
    const theme = useAppSelector(store => store.theme.value);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [isValidForm, setValidForm] = useState(true);
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [users, setUsers] = useState<IUser[]>([]);
    
    useEffect(() => {
        (async () => {
            const users = await dispatch(getUsers());
            setUsers(users.payload);
            dispatch(setAuthorized(false));
        })()
    }, []);
    
    const handleSubmitForm = (event: any) => {
        event.preventDefault();
        if (event.target.checkValidity()) {
            setValidForm(true);
            const user = users.find((user: IUser) => user.email === form.email);
            if (!user) {
                authApi.post('/user', form);
                localStorage.setItem('user', JSON.stringify(form));
                dispatch(setAuthorized(true));
                navigate('/');
            } else {
                dispatch(changeVisible());
            }
        }
         else {
            setValidForm(false);
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
                    <div className={styles.label}>Name</div>
                    <input type="text" placeholder="Your name" value={form.name} required onChange={(event: any) => setForm({ ...form, name: event.target.value })} />
                    <div className={styles.error}>Error email</div>
                </div>
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
            <button type='submit' className={styles.button}>Sign Up</button>
        </form>
    );
};

export default FormSignUp;

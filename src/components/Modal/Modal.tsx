import React from 'react';
import styles from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeVisible } from '../../redux/slices/modalSlice';

const Modal = () => {
    const visible = useAppSelector(store => store.modal.visible);
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(changeVisible());
    }

    if (!visible) return null;
    return (
        <div className={styles.modal}>
            <div className={styles.dialog} >
                <h3 className={styles.title}>User not found</h3>
                <div className={styles.body}>
                    <div className={styles.content}>
                        <p>Try to input another
                            email or password. </p>
                        <p>If you don't have an account,
                            you can sign up.</p>
                    </div>
                </div>
                <div>
                    <button className={`${styles.button} ${styles.buttonSignUp}`} >Sign Up</button>
                    <button className={styles.button} onClick={handleCloseModal}>Try again</button>
                </div>
            </div>
        </div>

    );
};

export default Modal;
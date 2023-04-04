import React from 'react';
import styles from './Modal.module.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { changeVisible } from '../../redux/slices/modalSlice';
import { useNavigate } from 'react-router-dom';

interface IModal {
    name: string;
    title: string;
    content: string;
}

const Modal = ({name, title, content}: IModal) => {
    const visible = useAppSelector(store => store.modal.visible);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const handleCloseModal = () => {
        dispatch(changeVisible());
    };

    const handleSignUpModal = () => {
        dispatch(changeVisible());
        if (name === 'Sign In') navigate('/signup');
        else navigate('/signin');
    };

    if (!visible) return null;
    return (
        <div className={styles.modal}>
            <div className={styles.dialog} >
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.body}>
                    <div className={styles.content}>
                        {content}
                    </div>
                </div>
                <div>
                    <button className={`${styles.button} ${styles.buttonSignUp}`} onClick={handleSignUpModal}>
                        {name === 'Sign In' ? 'Sign Up' : 'Sign In' }
                    </button>
                    <button className={styles.button} onClick={handleCloseModal}>Try again</button>
                </div>
            </div>
        </div>

    );
};

export default Modal;
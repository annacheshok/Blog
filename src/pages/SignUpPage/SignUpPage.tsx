import React from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { breadCrumbsSignIn, modalSignUp } from '../../constants';
import Modal from '../../components/Modal/Modal';
import FormSignUp from '../../components/FormSignUp/FormSignUp';

const SignUpPage = () => {
    return (
        <PageTemplate title={'Sign Up'}>
            <BreadCrumbs breadCrumbs={breadCrumbsSignIn} />
            <Modal name='Sign Up' title={modalSignUp.title} content={modalSignUp.content} />
            <FormSignUp />
        </PageTemplate>
    );
};

export default SignUpPage;
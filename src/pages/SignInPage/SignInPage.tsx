import React, { useState } from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import FormSignIn from '../../components/FormSignIn/FormSignIn';
import Modal from '../../components/Modal/Modal';
import { breadCrumbsSignIn, modalSignIn } from '../../constants';

const SignInPage = () => {
    return (
        <PageTemplate title={'Sign In'}>
            <BreadCrumbs breadCrumbs={breadCrumbsSignIn}/>
            <Modal name='Sign In' title={modalSignIn.title} content={modalSignIn.content}/>
            <FormSignIn/>
        </PageTemplate>
    );
};

export default SignInPage;
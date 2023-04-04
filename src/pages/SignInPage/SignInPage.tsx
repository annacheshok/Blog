import React, { useState } from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import SignIn from '../../components/FormSignIn/FormSignIn';
import Modal from '../../components/Modal/Modal';
import { breadCrumbsSignIn } from '../../constants';

const SignInPage = () => {
    return (
        <PageTemplate title={'Sign In'}>
            <BreadCrumbs breadCrumbs={breadCrumbsSignIn}/>
            <Modal/>
            <SignIn/>
        </PageTemplate>
    );
};

export default SignInPage;
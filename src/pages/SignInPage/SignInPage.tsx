import React, { useState } from 'react';
import PageTemplate from '../PageTemplate/PageTemplate';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import SignIn from '../../components/FormSignIn/FormSignIn';
import Modal from '../../components/Modal/Modal';

const SignInPage = () => {
    const breadCrumbs = [
        {
            link: '/',
            title: 'Back to home'
        }
    ];
    return (
        <PageTemplate title={'Sign In'}>
            <BreadCrumbs breadCrumbs={breadCrumbs}/>
            <Modal/>
            <SignIn/>
        </PageTemplate>
    );
};

export default SignInPage;
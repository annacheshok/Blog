import React from 'react';
import Tab from '../Tab/Tab';
import styles from './Tabs.module.scss';

const Tabs = () => {
    
    return (
        <div className={styles.container}>
            <Tab title="Articles" />
            <Tab title="News" />
        </div>
    );
};

export default Tabs;
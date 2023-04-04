import React from 'react';
import Tab from '../Tab/Tab';
import styles from './Tabs.module.scss';
import { tabs } from '../../constants';

const Tabs = () => {
    return (
        <div className={styles.container}>
            {tabs.map((tab, index) => <Tab key={index} title={tab} />)}
        </div>
    );
};

export default Tabs;
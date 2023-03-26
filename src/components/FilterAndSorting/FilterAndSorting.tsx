import React, { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';
import styles from './FilterAndSorting.module.scss';


const FilterAndSorting = () => {
    const filterCategories = ['day', 'week', 'month', 'year'];
    const [activeFilterButton, setActiveFilterButton] = useState('');

    return (
        <div className={styles.container}>
            {filterCategories.map((filterCategory, index) => <FilterButton key={index} activeFilterButton={activeFilterButton} setActiveFilterButton={setActiveFilterButton} title={filterCategory}/>)}
        </div>
    );
};

export default FilterAndSorting;
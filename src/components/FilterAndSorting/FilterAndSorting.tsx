import React, { useState } from 'react';
import FilterButton from '../FilterButton/FilterButton';
import Select from '../Select/Select';
import styles from './FilterAndSorting.module.scss';

const filterCategories = ['Day', 'Week', 'Month', 'Year'];
const sortCategories = ['A-Z', 'Z-A'];

const FilterAndSorting = () => {
    const [activeFilterButton, setActiveFilterButton] = useState('');

    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                {filterCategories.map((filterCategory, index) => <FilterButton key={index} activeFilterButton={activeFilterButton} setActiveFilterButton={setActiveFilterButton} title={filterCategory} />)}
            </div>
            <Select optionTitles={filterCategories} selectTitle={'Date'} />
            <Select optionTitles={sortCategories} selectTitle={'Sort'} />
        </div>
    );
};

export default FilterAndSorting;
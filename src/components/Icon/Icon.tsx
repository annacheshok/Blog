import React from 'react';
import { useAppSelector } from '../../redux/hook';
import styles from './Icon.module.scss';
import icons from './Icons.svg';

interface IIcon {
    name: string;
    color: string;
    size: {
        width: string;
        height: string;
    }
}

const Icon = ({ name, color , size}: IIcon) => {
    const theme = useAppSelector(store => store.theme.value);

    return (
        <svg className={`
        icon-${name}
        ${styles.container}
        ${theme === 'dark' ? styles.containerDark : ''}
        `}
         stroke={color} width={size.width} height={size.height}>
            <use xlinkHref={`${icons}#icon-${name}`} />
        </svg>
    )
}

export default Icon;
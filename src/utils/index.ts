import { useAppSelector } from './../redux/hook';

export const useShowThemeStyle = () => {
    const theme = useAppSelector(store => store.theme.value)

    if (theme === 'light') return ''
    else return 'styles.dark'
}
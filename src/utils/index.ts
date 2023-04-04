import moment from 'moment';

export const formatDate = (date: string) => {
    return moment(date).format('LL');
};

export const findFirstPostOfPage = (page: number, count: number) => {
    if(!page) return 0;
    if (page == count) return count - 1;
    else return 1 + (page - 1) * 12;
};

export const findCountOfPages = (countOfPosts: number) => {
    if (countOfPosts > 0 && countOfPosts <= 12) return 1;
    else return Math.ceil(countOfPosts / 12);
};

export const findNumbersInPagination = (page: number, count: number, width: number) => {
    if (page > count) {
        return [count - 2, count - 1, count];
    } 
    else if (width < 768) {
        if (page >= 3) {
            return [page - 1, page, page + 1];
        }
        else if (page < 3) {
            if (count >= 3) return [1, 2, 3];
            else if (count == 2) return [1, 2];
            else if (count == 1) return [1];
            else if (count == 0) return null;
        }
    }
    else if (page >= 3 && page <= count - 2) {
        return [page -1, page, page + 1];
    }
    else if (page < 3) {
        if (count >= 3) return [1, 2, 3];
        else if (count == 2) return [1, 2];
        else if (count == 1) return [1];
        else if (count == 0) return null;
    }
    else if (page > count - 2) {
        return [count - 2, count - 1, count];
    }
};

export const getDateForFilter = (categoryDate: any) => {
    return moment().subtract(1, categoryDate).format().slice(0, 10).replace('/', '-');
};

export const getNameAndSurnameOfUser = (name: string | undefined) => {
    let nameArray;
    if(name)  {
        nameArray = name.toUpperCase().split(' ');
        if (nameArray.length > 1) return `${nameArray[0][0]} ${nameArray[1][0]}`
        else return nameArray[0].slice(0, 2);
    }
};



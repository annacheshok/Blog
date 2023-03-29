import { IGetPosts } from './../../types/index';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api";
import { IPost } from "../../types";
import { findFirstPostOfPage, findCountOfPages, getDateForFilter } from '../../utils';

interface IInitialState {
    posts: IPost[],
    category: string,
    page: number,
    count: number,
    filter: string,
    sort: string,
    search: string
}

const initialState: IInitialState = {
    posts: [],
    category: "articles",
    page: 1,
    count: 0,
    filter: '',
    sort: 'A-Z',
    search: ''
}

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async ({ category, page, count, filter, sort, search}: IGetPosts, thunkApi) => {
        let url = `/${category === "news" ? "blogs" : category}?`;
        try {
            if (page) {
                url += `_start=${findFirstPostOfPage(page, count)}&`;
            }
            
            if (filter) {
                url += `publishedAt_gte=${getDateForFilter(filter)}&`;
            }
            if (sort) {
                if (sort === 'A-Z') url += `_sort=title&`
                else if (sort === 'Z-A') url += `_sort=summary&`;
            }
            if (search) {
                url += `title_contains=${search}&`;
            } 

             url += `_limit=12`;

            const response = await api.get(url);
            return response.data;

        } catch (error: any) {
            return thunkApi.rejectWithValue({ errorMessage: error.message });
        }
    }
);

export const getAllPostsCount = createAsyncThunk(
    "posts/getAllPostsCount",
    async ({ category, filter, search }: IGetPosts, thunkApi) => {   
        let url = `/${category === "news" ? "blogs" : category}/count?`;
        if (search) {
            url += `title_contains=${search}&`;
        }
        if (filter) {
            url += `publishedAt_gte=${getDateForFilter(filter)}&`;
        }
        try {
            const response = await api.get(url);
            return response.data;
        } catch (error: any) {
            return thunkApi.rejectWithValue({ errorMessage: error.message });
        }
    }
);

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload.toLowerCase();
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        changeFilter: (state, action: PayloadAction<any>) => {
            state.filter = action.payload;
        },
        changeSort: (state, action: PayloadAction<any>) => {
            state.sort = action.payload;
        },
        changeSearch: (state, action: PayloadAction<any>) => {
            state.search = action.payload;
        },
    },
    extraReducers:
        (builder) => {
            builder.addCase(getAllPosts.fulfilled, (state, action) => {
             state.posts = action.payload;
            })
            builder.addCase(getAllPostsCount.fulfilled, (state, action) => {
               state.count = findCountOfPages(action.payload);
            })
        }
})

export const { changeCategory, changePage, changeFilter, changeSort, changeSearch } = postsSlice.actions;


const postReducer = postsSlice.reducer;
export default postReducer;


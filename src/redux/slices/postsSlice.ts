import { IGetPosts } from './../../types/index';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../api";
import { IPost } from "../../types";
import { findFirstPostOfPage, findCountOfPages } from '../../utils';

interface IInitialState {
    posts: IPost[],
    category: string,
    page: number,
    count: number,
}

const initialState: IInitialState = {
    posts: [],
    category: "articles",
    page: 1,
    count: 0,
}

export const getAllPosts = createAsyncThunk(
    "posts/getAllPosts",
    async ({ category, page, title, date }: IGetPosts, thunkApi) => {
        let url = `/${category === "news" ? "blogs" : category}?`;
        try {
            if (page) {
                url += `_start=${findFirstPostOfPage(page)}`;
            }
            if (title) {
                console.log('fhfh')
                url += `title_contains=${title}`;
            }
            if (date) {
                url += `publishedAt_gte=${date}`;
            }
            url += `&_limit=12`;
            const response = await api.get(url);
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue({ errorMessage: error.message });
        }
    }
);

export const getAllPostsCount = createAsyncThunk(
    "posts/getAllPostsCount",
    async ({ category, title, date }: IGetPosts, thunkApi) => {
        let url = `/${category === "news" ? "blogs" : category}/count?`;
        if (title) {
            url += `title_contains=${title}`;
        }
        if (date) {
            url += `publishedAt_gte=${date}`;
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

export const { changeCategory, changePage } = postsSlice.actions;


const postReducer = postsSlice.reducer;
export default postReducer;


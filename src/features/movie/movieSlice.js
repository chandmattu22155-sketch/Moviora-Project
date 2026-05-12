import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  search: "",
  currentPage: 1,
  selectedMovieId: null,

  filters: {
    quality: "",
    genre: "",
    rating: "",
    limit: "20",
    sort_by: "",
  },
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },

    setPage: (state, action) => {
      state.currentPage = action.payload;
    },

    setSelectedMovieId: (state, action) => {
      state.selectedMovieId = action.payload;
    },

    setFilters: (state, action) => {
      state.filters = {
        ...state.filters,
        ...action.payload,
      };
    },

    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
  },
});

export const {
  setSearch,
  setPage,
  setSelectedMovieId,
  setFilters,
  clearFilters,
} = movieSlice.actions;
export default movieSlice.reducer;

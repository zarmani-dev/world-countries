import { create } from "zustand";
// import data from "../data/data.json";

const useStore = create((set) => ({
  // data: data,
  data: [],
  showData: [],
  page: 1,

  setData: (data) => set({ data: data }),

  loadMore: () =>
    set((state) => {
      const count = 100;
      const start = state.page * count;
      const end = start + count;
      const nextPage = state.page + 1;
      return {
        showData: [...state.showData, ...state.data.slice(start, end)],
        page: nextPage,
      };
    }),

  resetShowData: () => set({ showData: [], page: 1 }),

  searchData: (e) =>
    set((state) => {
      return {
        showData: state.data.filter((item) =>
          item.name.toLowerCase().includes(e.toLowerCase())
        ),
      };
    }),

  filterData: (region) =>
    set((state) => {
      return {
        showData: state.data.filter((item) => item.region === region),
      };
    }),
}));

export default useStore;

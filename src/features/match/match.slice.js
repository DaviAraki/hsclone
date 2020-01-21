import { createSlice } from '@reduxjs/toolkit';
import { loadingStart, loadingFailed } from 'utils/redux.loading';

let initialState = {
  error: null,
  isLoading: false,
  yourBoard: []
};

const matchSlice = createSlice({
  name: 'match',
  initialState,
  reducers: {
    initMatchFailure: loadingFailed,
    initMatchStart: loadingStart,
    initMatchSuccess: state => {
      state.isLoading = false;
    }
  }
});

const { actions, reducer } = matchSlice;

export const { initMatchFailure, initMatchStart, initMatchSuccess } = actions;

// const fetchMapDroneImagesFromNeighborhoods = data => {
//   return data;
// }

// export const initLayout = () => async dispatch => {
//   try {
//     dispatch(initLayoutStart());
//     const footerHeight = await getFooterHeight();
//     dispatch(initLayoutSuccess(footerHeight));
//   } catch (err) {
//     dispatch(initLayoutFailure(err));

//     // recursive failure init
//     setTimeout(() => {
//       dispatch(initLayout());
//     }, 2000);
//   }
// };

export default reducer;

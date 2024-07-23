import { RootState } from '../store/store';

export const selectCount = (state: RootState) => state.count;
export const selectMinCount = (state: RootState) => state.minCount;
export const selectMaxCount = (state: RootState) => state.maxCount;
export const selectInputIsActive = (state: RootState) => state.inputIsActive;
export const selectInputIsError = (state: RootState) => state.inputIsError;

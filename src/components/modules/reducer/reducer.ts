export type StateType = {
    minCount: number;
    maxCount: number;
    count: number;
    inputIsActive: boolean;
    inputIsError: boolean;
};

export type IncrementCounterType = ReturnType<typeof incrementCountAC>;

export type ResetCounterType = ReturnType<typeof resetCountAC>;

export type SetMaxCountType = ReturnType<typeof setMaxCountAC>;

export type SetMinCountType = ReturnType<typeof setMinCountAC>;

export type SetInputActiveType = ReturnType<typeof setInputActiveAC>;

export type SetInputErrorType = ReturnType<typeof setInputErrorAC>;

export type ActionType =
    | SetInputActiveType
    | SetInputErrorType
    | IncrementCounterType
    | ResetCounterType
    | SetMaxCountType
    | SetMinCountType;

const initialState = {
    minCount: 0,
    maxCount: 5,
    count: 0,
    inputIsActive: false,
    inputIsError: false,
};

export const counterReducer = (state: StateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'count/increment': {
            return { ...state, count: Math.min(state.count + 1, state.maxCount) };
        }

        case 'count/reset': {
            return { ...state, count: state.minCount };
        }

        case 'count/set-max-count': {
            return { ...state, maxCount: action.maxCount };
        }

        case 'count/set-min-count': {
            return { ...state, minCount: action.minCount };
        }

        case 'input/active': {
            return { ...state, inputIsActive: action.inputIsActive };
        }

        case 'input/error': {
            const isCorrectInput = state.maxCount > state.minCount && state.minCount >= 0;
            return { ...state, inputIsError: !isCorrectInput };
        }

        default: {
            return state;
        }
    }
};

export const incrementCountAC = () => {
    return { type: 'count/increment' } as const;
};

export const resetCountAC = () => {
    return { type: 'count/reset' } as const;
};

export const setMaxCountAC = (maxCount: number) => {
    return { type: 'count/set-max-count', maxCount } as const;
};

export const setMinCountAC = (minCount: number) => {
    return { type: 'count/set-min-count', minCount } as const;
};

export const setInputActiveAC = (inputIsActive: boolean) => {
    return { type: 'input/active', inputIsActive } as const;
};

export const setInputErrorAC = () => {
    return { type: 'input/error' } as const;
};

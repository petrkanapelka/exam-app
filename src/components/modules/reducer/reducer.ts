export type StateType = {
    minCount: number;
    maxCount: number;
    count: number;
    inputIsActive: boolean;
    inputIsError: boolean;
};

export type ActionType = {
    type: string;
};

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
            const increment = 1;
            const newCount = state.count + increment;

            return { ...state, count: newCount <= state.maxCount ? newCount : state.count };
        }

        case 'count/reset': {
            return { ...state, count: state.minCount };
        }

        default: {
            return state;
        }
    }
};

const ADD_TESTIMONY = 'ADD_TESTIMONY'
const LIST_TESTIMONY = 'LIST_TESTIMONY'
const CURRENT_TESTIMONY = 'CURRENT_TESTIMONY'

export const addTestimony = (testimony) => ({ type: ADD_TESTIMONY, payload: testimony })

export const getAllTestimony = (testimonies) => ({ type: LIST_TESTIMONY, payload: testimonies })

export const getTestimony = numero => ({ type: CURRENT_TESTIMONY, payload: { numero } })

const initialState = {
    testimonies: [],
    testimony: {}
}

export const testimonyReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LIST_TESTIMONY:
            return { ...state, testimonies: payload }
        case CURRENT_TESTIMONY:
            return { ...state, testimony: state.testimonies.find(testimony => testimony.numero === payload.numero) }

        case ADD_TESTIMONY:
            return { ...state, testimonies: [...state.testimonies, payload] }

        default:
            return state
    }
}

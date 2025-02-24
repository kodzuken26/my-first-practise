const initialState = {
    customer: { name: '', surname: '', email: '' },
    payment: { cardNumber: '', expiry: '', cvc: '' },
    address: { street: '', city: '', lat: null, lng: null }
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_CUSTOMER':
            return { ...state, customer: action.payload };
        case 'SET_PAYMENT':
            return { ...state, payment: action.payload };
        case 'SET_ADDRESS':
            return { ...state, address: action.payload };
        default:
            return state;
    }
};
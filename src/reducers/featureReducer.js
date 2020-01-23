
const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image:
            'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500, hide: false },
        { id: 2, name: 'Racing detail package', price: 1500, hide: false },
        { id: 3, name: 'Premium sound system', price: 500, hide: false },
        { id: 4, name: 'Rear spoiler', price: 250, hide: false }
    ]
}
//am going to ...State car.features ... features

export const featureReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FEATURE':
            console.log('ADDED_FEATURE!')
            console.log(action.payload)
            return {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [...state.car.features, action.payload]
                }
                //Two potentional methods to fix bug one is to deal with state one is to stop action
                //, additionalFeatures: state.additionalFeatures.map(
                //     item => {
                //         if (item.id === action.payload.id) { return { ...item, hide: true } }
                //         else { return { ...item } }
                //     })
            };
        case 'REMOVE_FEATURE':
            console.log('REMOVE_FEATURE!')
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {
                    ...state.car,
                    features: state.car.features.filter(item => item.id !== action.payload.id)
                }
            };
        default: return state;
    }
}

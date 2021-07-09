const ini_state = {
    covidData: []
}

const reducer = (state = ini_state, action) => {
    switch(action.type){
        case 'GetCovidData':
            return {
                ...state,
                covidData:action.covidData
            }
        default:
            return state
    }
}

export default reducer;
const getData = () => {
    return (dispatch)=>{
        fetch('https://api.covidtracking.com/v1/states/current.json')
            .then(response => response.json())
            .then(json => dispatch ({type: 'GetCovidData', covidData: json}))
    }
}

export {
    getData
}
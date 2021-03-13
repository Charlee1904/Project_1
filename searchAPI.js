const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const imageURL='https://api.nasa.gov/planetary/apod?api_key='+key
fetch(imageURL)
    .then(function(responce){
        responce.json()
        .then(function(data){
            console.log(data)
        })
    })
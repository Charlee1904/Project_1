const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const test='https://mooncalc.org/#/lat,lon,zoom/date/time/objectlevel/maptype'
const imageURL='https://api.nasa.gov/planetary/apod?start_date=2012-02-11&api_key='+ key

fetch(test)
    .then(function(responce){
        responce.json()
        .then(function(data){
            console.log(data)
            
            // document.getElementById("potdImg").src=data[2].url
        })
    })

    
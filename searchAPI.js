const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const test='https://mooncalc.org/#/lat,lon,zoom/date/time/objectlevel/maptype'
const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const playVidButton= document.querySelector("#potdVid");
const myVideo=document.getElementById("potdVid")
// const img2='https://api.nasa.gov/planetary/apod?start_date=2021-03-01&end_date=2021-03-15&api_key='+ key

fetch(imageURL)
    .then(function(responce){
        responce.json()
        .then(function(data){
            console.log(data)
            if(data.media_type=== "video"){
               myVideo.src= data.url
            }
            else if(data.media_type==="image"){
            document.getElementById("potdImg").src=data.url}
        })
    })

 
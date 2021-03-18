const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const playVidButton= document.querySelector("#potdVid");
const myVideo=document.getElementById("potdVid")
const marsPagebtn =document.querySelector('#marshtml')
marsPagebtn.addEventListener("click", marsPageFun)




function homePage(){
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
        })}



        function marsPageFun(){
            window.location.href = "marsPage.html"
            console.log('test')



        }
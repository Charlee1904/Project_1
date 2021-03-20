const key ='AMSm7BUhVVrEEznPAhGCTYFMmVY3KUheoNeWS4H5'
const imageURL='https://api.nasa.gov/planetary/apod?&api_key='+ key
const marsPageBtn = document.querySelector("#goToMarsPage")
marsPageBtn.addEventListener("click", marsPageFun)

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
                document.getElementById("titlePic").innerHTML = data.title;
                document.getElementById("copyrightPic").innerHTML = data.copyright;
                 document.getElementById("explanationPic").innerHTML = data.explanation;
            })
        })}



        function marsPageFun(){
            window.location.href = "marsPage.html"
            console.log('test')



        } 
console.log("Script Running....")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() =>{document.querySelector('.cross').style.display = 'inline'},300);
        }
})


//testing
// function downloadImage() {
//     var img = document.getElementById("CV");
//     var link = document.createElement('a');
//     link.href = img.src;
//     link.download = "/cv.txt";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   }

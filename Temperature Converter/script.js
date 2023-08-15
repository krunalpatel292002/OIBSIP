//Defining UI
const UIcelsius = document.querySelector('#result-celsius');
const UIfahrenheit = document.querySelector('#result-fahrenheit');
const UIkelvin = document.querySelector('#result-kelvin');
const UIinputValue = document.querySelector('#UIinputValue');
const UIinputValueUnit = document.querySelector('#UIinputValueUnit');

//Defining Calculating elements
const calculateBtn = document.querySelector('.calculateBtn');
const temperatureUnit = document.querySelector('#tempUnit');

//Listen for value when calculated clicked
calculateBtn.addEventListener('click',calculateResult);
//Listen for value when option is clicked
temperatureUnit.addEventListener('click',changeUIUnit);

//Defining variables in global scope so that it can be use in outer function.
let celsius,fahrenheit,kelvin;

//Calculate function
function calculateResult(e){
    //getting the input value
    let inputNumber = parseInt(UIinputValue.value);

    //getting the values from option
    let optionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();

    //Checking the input and assigning if statement according to that
    if(optionValue == "select your desire temperature unit" || isNaN(inputNumber)){
       alert('Please Enter Both Number / Temperature Value');

    }else
        if(optionValue == "celsius"){
            celsius = inputNumber;
            fahrenheit = ((inputNumber * 9/5)+32).toFixed(2);
            kelvin = (inputNumber + 273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "fahrenheit"){
            celsius = ((inputNumber-32)*5/9).toFixed(2);
            fahrenheit = inputNumber;
            kelvin = (((inputNumber-32)*5/9)+273.15).toFixed(2);
            UIresultOutput();
        };
        if(optionValue == "kelvin"){
            celsius = (inputNumber - 273.15).toFixed(2);
            fahrenheit = ((inputNumber - 273.15)*9/5 + 32).toFixed(2);
            kelvin = inputNumber;
            UIresultOutput();
        }

    e.preventDefault();
};

//Dynamically Unit changing function
function changeUIUnit(){
    let UIoptionValue = (temperatureUnit.options[temperatureUnit.selectedIndex].text).toLowerCase();
        if(UIoptionValue == 'celsius'){
            UIinputValueUnit.innerHTML ='&deg;C';
        }
        if(UIoptionValue == 'fahrenheit'){
            UIinputValueUnit.innerHTML ='&deg;F';
        }
        if(UIoptionValue == 'kelvin'){
            UIinputValueUnit.innerHTML ='&deg;K';
        }
}

//Appending result into UI function
function UIresultOutput(){
    UIcelsius.value = celsius;
    UIfahrenheit.value = fahrenheit;
    UIkelvin.value = kelvin;
    if(celsius < 0){
        document.body.style.backgroundImage = "url('https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg')";
    }
   else if(celsius >= 0  &&  celsius <= 10){
        document.body.style.backgroundImage = "url('https://wallpapers.com/images/featured/ice-ottxzua7t54e3vfb.jpg')";
    }
    else if (celsius > 10  &&  celsius <= 25) {
        document.body.style.backgroundImage = "url('https://gumlet.assettype.com/homegrown/import/facebook-53768-forest.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max&enlarge=true')";
    }
    else if (celsius > 25  &&  celsius <= 35) {
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1594179594534-9d826c107c10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3VtbWVyJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D&w=1000&q=80')";
    }
    else if (celsius > 35  &&  celsius <= 45) {
        document.body.style.backgroundImage = "url('https://cdn.britannica.com/10/152310-050-5A09D74A/Sand-dunes-Sahara-Morocco-Merzouga.jpg')";
    }
    else if( celsius >45 ){
        document.body.style.backgroundImage = "url('https://cdn.suwalls.com/wallpapers/space/sun-22261-1920x1080.jpg')";
    }
//     if(celsius < 0){
        
//         document.body.style.backgroundImage = "url('https://www.learnreligions.com/thmb/1EH7zA1xz3TYv9WvaOOlF0nZuSU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/himalaya-mountains-landscape-from-kalapattar-view-point-at-sunset--everest-region--nepal-864223704-5c7374c546e0fb0001835dc3.jpg')";
//     }
//    else if(celsius >= 0  &&  celsius <= 10){
//         document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/06/Download-Free-Ice-Background.jpg')";
//     }
//     else if (celsius > 10  &&  celsius <= 25) {
//         document.body.style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcnmcrUHxUfmj-R9APHEKbynYu7i03F0P4dQ&usqp=CAU')";
//     }
//     else if (celsius > 25  &&  celsius <= 35) {
//         document.body.style.backgroundImage = "url('https://www.poughkeepsiejournal.com/gcdn/presto/2020/05/17/PPOU/5382eb6b-caa6-4123-9bb2-caac4b7b1a70-weather_waryas_park.jpg?width=660&height=495&fit=crop&format=pjpg&auto=webp')";
//     }
//     else if (celsius > 35  &&  celsius <= 45) {
//         document.body.style.backgroundImage = "url('https://a.cdn-hotels.com/gdcs/production93/d498/e9d1655b-1dda-4e21-8402-c7a77c920611.jpg')";
//     }
//     else if( celsius >45 ){
//         document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/6646374.jpg')";
//     }
    //clear Input
    UIinputValue.value = '';
    UIinputValueUnit.value = '';

}
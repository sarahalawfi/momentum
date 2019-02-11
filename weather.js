
axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&lang=ar&appid=8f6b3438ca2151040b9a60aa7def7fa4'
  })
    .then((response) => {
        console.log(response);
        const city=response.data.name;
       
        const temp = response.data.main.temp;
        $('body').append(`<h2>${temp+"°"}</h2>`)
        let weather=response.data.weather[0].main;
        if(weather==="Clouds"){
        $(".icon").html("☁️"+response.data.weather[0].main);}
       else if((weather==="Rain")){
         $(".icon").html("🌧️"+response.data.weather[0].main); 
        }else if(weather==="Sun") {
          $(".icon").html("☀️"+response.data.weather[0].main);
        }else{
            $(".icon").html(response.data.weather[0].main);
        }
        $('body').append(`<h2>${city}</h2>`)
     
      

    })
    .catch((error) => {
      console.log(error);
    });

    
 


   



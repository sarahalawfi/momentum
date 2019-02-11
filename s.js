

axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
}) .then((response) => {
    console.log(response);
   
    var quote=document.createElement('h4');
    var time=document.createElement('h1');
   time.textContent=moment().format("h:mm A");
   quote.textContent=response.data.quoteText;
   $('body').append(quote);
   
    $('body').append(time);
  
 

}) .catch((error) => {
    console.log(error);
  });

  // var q=response.data.quoteText;
    //$('body').append(`${response.data.quoteText}`);

   
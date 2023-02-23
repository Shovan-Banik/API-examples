const getQuote=()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuote(data))
}
const displayQuote=quote=>{
    blockQuote=document.getElementById('quote');
    blockQuote.innerText=quote.quote;
}
getQuote();
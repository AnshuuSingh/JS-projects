const url = "https://qapi.vercel.app/api/random"
// const apiKey = "t0wnfo3DP/9Ay9CkzwGigA==yZJXCcI1OFSDZsFK"
const clickBtn = document.querySelector('#btn1');
const tweetBtn = document.querySelector('#btn2');
const quote = document.querySelector('#quote');
const author = document.querySelector('#name');

async function showQuote(){
    let response = await fetch(url);
    var data = await response.json()
    quote.innerHTML = `"${data.quote}"`
    author.innerHTML = data.author
}

clickBtn.addEventListener('click', ()=>{
    showQuote()
})

function showTweet(){
    window.open(`https://twitter.com/intent/tweet?text=` + quote.innerHTML, "Tweet Window", "width = 600, height = 400", )
}

tweetBtn.addEventListener('click', ()=>{
    showTweet()
})

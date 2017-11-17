// afbb435a100a400199bc8c0b56011449


document.addEventListener('DOMContentLoaded', function() {

  let firstArticle  = document.querySelector('.first-article');
  let secondArticle = document.querySelector('.second-article');
  let thirdArticle  = document.querySelector('.third-article');
  let fourthArticle = document.querySelector('.fourth-article');
  
  // Fetch Newsapi.org API. This is my key used for demonstration. Please register your free own key at: https://newsapi.org/account
  fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=afbb435a100a400199bc8c0b56011449')
  .then((res) => res.json())
  .then((data) => {

    console.table(data.articles);
    let story = data.articles;

    firstArticle.children[0].children[0].innerHTML = story[2].title;
    firstArticle.children[0].children[1].innerHTML = story[2].author;

    secondArticle.children[0].children[0].innerHTML = story[0].title;
    secondArticle.children[0].children[1].innerHTML = story[0].author;

    thirdArticle.children[0].children[0].innerHTML = story[3].title;
    thirdArticle.children[0].children[1].innerHTML = story[3].author;

    
    fourthArticle.children[0].children[0].innerHTML = story[1].title;
    fourthArticle.children[0].children[1].innerHTML = story[1].author;
  
  })
  .catch((err) => console.log(err));

})
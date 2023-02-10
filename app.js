/*const Paragraph = `<blockquote>${Quote}</blockquote>`
const Authorname = `<cite>${Author}</cite>`
const randomnum = math.floor(math.random * quotes.length)*/

/*const Paragraph = document.getElementById("Paragraph");
const Authorname = document.getElementById("Authorname");*/

const quotes = [
    {
      quote:
        "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got",
      author: " - Life"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "- John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "- Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "- David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "- Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " - Tyne Daly"
    }
  ];

const unsplashAccessKey = "wsKEuwjFGNJXcEZ8UOnoeLfka64MTTxHgVVAVEONIsE";
const imageContainer = document.getElementById("Container");

  function getImage() {
    fetch(`https://api.unsplash.com/photos/random?query=motivational+nature&client_id=${unsplashAccessKey}`)
      .then(res => res.json())
      .then(data => {
        imageContainer.style.backgroundImage = `url('${data.urls.regular}')`;
      });
  }
  

const btn = document.getElementById("generate-btn");
  btn.addEventListener("click", function(){
    getImage()
    let randomnum = Math.floor(Math.random() * quotes.length);
    document.getElementById("Quotemark").innerHTML = quotes[randomnum].quote;
    document.getElementById("Authorname").innerHTML = quotes[randomnum].author;
})
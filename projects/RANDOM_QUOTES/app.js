const colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
          '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
          
const quotes = [
    ["Quotes 1","Author 1"],
    ["Quotes 2","Author 2"],
    ["Quotes 3","Author 3"],
    ["Quotes 4","Author 4"],
    ["Quotes 5","Author 5"],
    ["Quotes 6","Author 6"],
    ["Quotes 7","Author 7"]
]

let currenQuote = '';
let currentAuthor = '';
let randomColor = '';
let randomQuote = '';

const mainArea = document.querySelector('#quote');

function getQuote(){
    randomQuote = Math.floor(Math.random() * quotes.length);
    randomColor = Math.floor(Math.random() * colors.length);

    currentQuote = quotes[randomQuote][0];
    currentAuthor = quotes[randomQuote][1];

    const markup = `<blockquote id="quote_text" class="text-left">${currentQuote}</blockquote>
                    <p id="author">- ${currentAuthor}</p>`;

    mainArea.innerHTML = markup;
    document.body.style.background = colors[randomColor];
    document.querySelector('h1').style.color = colors[randomColor];
    document.querySelector('#quote-btn').style.background = colors[randomColor];
    document.querySelector('#quote_text').style.borderLeft = `10px solid ${colors[randomColor]}`;               
}

const quotesButton = document.querySelector('#quote-btn');
quotesButton.addEventListener('click', getQuote);
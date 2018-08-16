var score = 0;
var count = 5;
var isPlaying = false;
//function to generate random word
function randWord(){
  let words = [
    'aeronomic',
    'aeronomical',
    'aeronomies',
    'aeronomist',
    'aeronomists',
    'aeronomy',
    'aeropause',
    'aeropauses',
    'aerophagia',
    'aerophagias',
    'aerophagies',
    'aerophagy',
    'aerophobe',
    'aerophobes',
    'aerophobia',
    'aerophobias',
    'aerophobic',
    'aerophone',
    'aerophones',
    'aerophore',
    'pice',
    'spicier',
    'spiciest',
    'spicilege',
    'spicileges',
    'spicily',
    'spiciness',
    'spicinesses',
    'spicing',
    'spick',
    'spicker',
    'spickest',
    'spicknel',
    'spicknels',
    'spicks',
    'spics',
    'spicula',
    'spiculae',
    'spiculations',
    'spicule',
    'spicules',
    'spiculum',
    'spicy',
    'spide',
    'spider',
    'spiderier',
    'spideriest',
    'spiderish',
    'spiderlike',
    'spiderman',
    'spidery',
    'spides',
    'spie',
    'spied',
    'spiegel',
    'spiegeleisen',
    'spiegeleisens',
    'spiegels',
    'spiel',
    'spieled',
    'spieler',
    'spielers',
    'spieling',
    'spiels',
    'spier',
    'spiered',
    'spiering'
  ];
   $('.word-show').text(words[Math.floor(Math.random()*words.length)]);
}

function showScore(){
  $('.score span').text(score)
}  
function start(){
  $('input[type="text"]').on('input',function(){
    
    if($(this).val().toLowerCase() == $('.word-show').text().toLowerCase()){
      $('.over').text('correct!!').show();
      $('input[type="text"]').val('');
      $('.word-show').text(randWord());
      isPlaying = true;
      ++score;
      showScore();
      count = 6;
      timer();
    }
  });
}
function timer(){
    
    if(count > 0) {
      count--;
    }
    else if (count == 0) {
      isPlaying = false;
    }
    $('.timer span').text(count);
 }
function checkStatus() {
  if(!isPlaying && count == 0 )
    {
      $('.over').text('game over!!!').show();
      score = -1;
    } 
}
$(document).ready(function(){
    randWord();
    setInterval(timer,1000);
    start();
    setInterval(checkStatus,50);
});


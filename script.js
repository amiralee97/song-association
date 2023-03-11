
const wordBox = document.querySelector('.wordbox');
const button = document.querySelector('button');

button.addEventListener("click", function() {
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "New Word";
        wordBox.innerText = "";
      } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds left";
      }
      timeleft -= 1;
    }, 1000);
})


button.addEventListener("click", getWord);
   
    function getWord(){
     
      
      var theWord= [
        'house',
        'friend',
        'nice',
        'dance',
        'please',
        'queen',
         'baby',
         'really',
        'tell',
        'me',
        'deserve',
        'give',
        'stop',
        'lady',
        'love',
        'think',
        'magic',
        'beautiful',
        'sorry',
        'flower',
        'hot',
         'say',
         'heart',
        'moon',
        'somebody',
        'endless',
        'you',
        'only',
        'play',
        'money',
      ];

      
      var wordNum = Math.floor(Math.random() * theWord.length);
      
     
      output.textContent = theWord[wordNum];
     

    }

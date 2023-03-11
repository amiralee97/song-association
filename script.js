

const button = document.querySelector('button');

button.addEventListener("click", function() {
    var timeleft = 10;
    var downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "New Word";
      } else {
        document.getElementById("countdown").innerHTML = timeleft + " seconds left";
      }
      timeleft -= 1;
    }, 1000); 
})


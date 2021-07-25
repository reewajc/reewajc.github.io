

  
  document.addEventListener('DOMContentLoaded', function(){
    
  
window.setInterval(function() {
    // this will execute on every 5 seconds
    var programmingLanguages = ["Spring", "Java", "JavaScript", "Python","HTML", "CSS","Bootstrap", "SDLC", "Git", "AWS","Docker","Oracle DB", "Hibernate"];
        
        document.querySelector('#pLang').innerHTML = programmingLanguages[Math.floor(Math.random() * 7)];
  
}, 2000);

greetVisitor();
   
})  

function greetVisitor(){
   var myDate = new Date();
    var hrs = myDate.getHours();

    var greet;

    if (hrs < 12)
        greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17)
        greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24)
        greet = 'Good Evening';

    document.getElementById('greet').innerHTML = greet + '!';

}

   



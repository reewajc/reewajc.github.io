

  
  document.addEventListener('DOMContentLoaded', function(){
    
  
window.setInterval(function() {
    // this will execute on every 5 seconds
    var programmingLanguages = ["C#", "Java", "JavaScript", "Python","HTML", "CSS","Bootstrap", "SDLC", "Git"];
        
        document.querySelector('#pLang').innerHTML = programmingLanguages[Math.floor(Math.random() * 7)];
  
}, 2000);
   
})  



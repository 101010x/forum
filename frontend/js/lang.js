let setQuestionnaire = (lang) => {
    if(lang === 'Arabic'){
      window.location.href = '../arabic.html';
    }
    else{
      window.location.href = '../french.html';
    }
  
  }
  
  let langHandler = (event) => {
    let languageChosen = document.getElementById('language');
    let language = languageChosen[languageChosen.selectedIndex].value;  
    localStorage.setItem('language', language)
    let form = document.getElementById('myForm');
  
    event.preventDefault();
    setQuestionnaire(language);
  }
  
  document.getElementById('myForm').addEventListener('submit', langHandler)
  
  
  $(function () {
    $('.scroll-down').click(function () {
      $('html, body').animate({ scrollTop: $('div.ok').offset().top }, 'slow');
      return false;
    });
  });
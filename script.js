const phrases = [
    "Find Your Path...",
    "Discover Your Passion...",
    "Shape Your Future...",
    "Smart Career Choices Await!"
  ];
  
  let i = 0, j = 0, currentPhrase = [], isDeleting = false, isEnd = false;
  
  function loopTypingEffect() {
    const typedText = document.querySelector(".typed-text");
  
    isEnd = false;
    typedText.innerHTML = currentPhrase.join("");
  
    if (i < phrases.length) {
      if (!isDeleting && j <= phrases[i].length) {
        currentPhrase.push(phrases[i][j]);
        j++;
        typedText.innerHTML = currentPhrase.join("");
      }
  
      if (isDeleting && j <= phrases[i].length) {
        currentPhrase.pop();
        j--;
        typedText.innerHTML = currentPhrase.join("");
      }
  
      if (j === phrases[i].length) {
        isEnd = true;
        isDeleting = true;
      }
  
      if (isDeleting && j === 0) {
        currentPhrase = [];
        isDeleting = false;
        i++;
        if (i === phrases.length) {
          i = 0;
        }
      }
    }
  
    const speed = isEnd ? 2000 : isDeleting ? 50 : 100;
    setTimeout(loopTypingEffect, speed);
  }
  
  loopTypingEffect();


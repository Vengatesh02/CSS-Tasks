window.onload = function(){
  var displayedText = [];

  let elements = document.querySelectorAll('.btn');
  elements.forEach(element =>{
  element.addEventListener('click', function(){
  let content = this.textContent;
  displayedText.push(content);
  alert(displayedText.join('\n'))
});
});
}


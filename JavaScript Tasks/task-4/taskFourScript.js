window.onload = function (){
  var vowels = ['a','e','i','o','u'];
  let friendList = document.querySelector("#friend");
  friendList.addEventListener('click' ,function(event){
  let letter = event.target.textContent.toLowerCase()[0];
  if(vowels.includes(letter)){
    event.target.style.backgroundColor = 'red';
  }else{
    event.target.style.backgroundColor = 'green';
  }
});
}


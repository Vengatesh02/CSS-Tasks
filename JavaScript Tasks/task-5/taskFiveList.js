window.onload = function(){
    let myList = document.querySelector('#name');
    let listItem = myList.querySelectorAll("li")
    listItem.forEach(function(item,index){
    item.addEventListener('click', function(element){
        if(index%2 === 0){
            element.target.style.color = 'red';
        }else{
            element.target.style.color = 'green'
        }
    })
})
}
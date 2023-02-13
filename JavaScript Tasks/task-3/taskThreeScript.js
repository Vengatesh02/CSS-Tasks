function displayFunction(){
    let input = document.getElementById("input");
    let display = document.getElementById("display");
    let submit = document.getElementById("submit");
    display.innerHTML = input.value;
    setTimeout(function() { alert(input.value); }, 50);
}
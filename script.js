const Decrease_btn = document.getElementById("Decrease_btn");
const Increase_btn = document.getElementById("Increase_btn");
const Reset_btn= document.getElementById("Reset_btn");
const counter_label = document.getElementById("counter_label");
let count = 0;
Increase_btn.onclick = function(){
    count++;
    counter_label.textContent = count;
}
Decrease_btn.onclick = function(){
    count--;
    counter_label.textContent = count;
}
Reset_btn.onclick = function(){
    count=0;
    counter_label.textContent = count;
}
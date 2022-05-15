
//Variables (BE CAREFUL THESE MIGHT BE USED IN OTHER JS FILES TOO)
let inp_as = document.getElementById('a_size'), array_size = inp_as.value;
let inp_gen = document.getElementById("a_generate");
let inp_aspeed = document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

let butts_algos = document.querySelectorAll(".algos button");

let div_sizes = [];
let divs = [];
let margin_size;
let cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Array generation and updation.

inp_gen.addEventListener("click", generate_array);
inp_as.addEventListener("input", update_array_size);

function generate_array() {
    cont.innerHTML = "";

    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * (inp_as.max - inp_as.min)) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size = 0.1;
        divs[i].style = " margin:0% " + margin_size + "%; background-color:turquoise; width:" + (100 / array_size - (2 * margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}
function show() {
    let info_cont2 = document.getElementById('info_cont2');
    if (info_cont2.style.display == 'none') {
        info_cont2.style.display = 'flex';
    }
    // else {
    //     info_cont2.style.display = 'block';
    // }
}
function update_array_size() {
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for (var i = 0; i < butts_algos.length; i++) {
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons() {
    for (var i = 0; i < butts_algos.length; i++) {
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
        inp_gen.disabled = true;
        inp_aspeed.disabled = true;
    }
}

function runalgo() {
    disable_buttons();

    this.classList.add("butt_selected");
    switch (this.innerHTML) {
        case "Bubble":   Bubble(); show();
            break;
        case "Insertion": Insertion();
            break;
        case "Merge": Merge();
            break;
        case "Quick": Quick();
            break;
        case "Heap": Heap();
            break;
    }
}
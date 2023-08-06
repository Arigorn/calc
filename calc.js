let input = document.getElementById("input");

function pressRowno() {
  input.value = eval(input.value);
}

input.addEventListener("keyup",function(event) {
  if (event.keyCode === 13) {
    pressRowno()
  }
});

function pressNum(e){ 
  input.value += e;
}

function pressOp (e){
  let lastChar = input.value.slice(-1);
  if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') {
    return;
  }
  input.value +=e;
}

function pressDot() {
  let lastDot = input.value.slice(-1);
  if (lastDot === '.') {
    return;
  }
  input.value +='.';
}

function pressCle() {
  input.value = "";
}
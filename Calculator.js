function Solve(val) {
    let v = document.getElementById('input');
    v.value += val;
}
function Clear() {
    let v = document.getElementById('input');
    v.value = '';
}
function Result() {
    let num1 = document.getElementById('input').value;
    let num2 = eval(num1);
    if(Number.isInteger(num2)) {
        document.getElementById('input').value = num2;
    }
    else {
        let num3 = num2;
        let lee = num2.toString().split('.')[1].length;
    
        if(lee>10) {
            document.getElementById('input').value = num3.toFixed(10);
        }
        else {
             document.getElementById('input').value = num3;
        }
    }
    
}
function Absolute() {
    let val = Number(document.getElementById('input').value);
    
    if(val < 0) {
        document.getElementById('input').value = Math.abs(val);
    }
    console.log(val);
}

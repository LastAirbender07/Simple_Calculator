function run1(){

	document.case.display.value += "1"
};
function run2(){

	document.case.display.value += "2"
};
function run3(){

	document.case.display.value += "3"
};
function run4(){

	document.case.display.value += "4"
};
function run5(){

	document.case.display.value += "5"
};

function run6(){

	document.case.display.value += "6"
};

function run7(){

	document.case.display.value += "7"
};

function run8(){

	document.case.display.value += "8"
};

function run9(){

	document.case.display.value += "9"
};

function run0(){

	document.case.display.value += "0"
};
function runPlus(){

	document.case.display.value += "+"
};
function runMinus(){

	document.case.display.value += "-"
};
function runDivide(){

	document.case.display.value += "/"
};
function runMultiply(){

	document.case.display.value += "*"
};

function runC(){

	document.case.display.value = ""
};


function runEquals() {
	var equals = eval(document.case.display.value)
	document.case.display.value = equals;
};

function compound()
{
    var p, r, t, n, a, c
    p = parseFloat(document.getElementById("p").value);
    r = parseFloat(document.getElementById("r").value);
    t = parseFloat(document.getElementById("t").value);
    n = parseInt(document.getElementById("n").value);

    a = p*((1+(r/100))**(n*t))
    c = a - p
    document.getElementById("ans1").value = c
    document.getElementById("ans2").value = a
};
function clear()
{
	document.p.value = ""
	document.r.value = ""
	document.t.value = ""
	document.n.value = ""
	document.ans1.value = ""
    document.ans2.value = ""
};

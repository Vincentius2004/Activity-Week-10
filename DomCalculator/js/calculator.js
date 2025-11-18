var answer;

function init() {
    answer = document.getElementById("ans");
    comp("uin");
}

function comp(id) {
    var el = document.getElementById(id);

    try {
        var res = eval(el.value);
        answer.textContent = res;
    } catch (e) {
        answer.textContent = "ERROR";
    }
}

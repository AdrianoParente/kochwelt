function calculate() {

    let amounts = [125, 100, 0.5, 2.5, 0.5, 0.5, 0.5, 0.5, 0.5, 100, 0.5];
    let units = ['g', 'g', 'Stk', 'EL', 'TL', 'TL', 'Prise(n)', 'Prise(n)', 'Prise(n)', 'g', 'TL']
    let sum;

    let portion = document.getElementById('inputPortionE').value;

    for (let i = 0; i < amounts.length; i++) {
        sum = amounts[i] * portion;
        document.getElementById('amountE' + (i + 1)).innerHTML = '';
        document.getElementById('unitE' + (i + 1)).innerHTML = '';
        document.getElementById('amountE' + (i + 1)).innerHTML += `${(sum.toFixed(1)).replace(".", ",")}`;
        document.getElementById('unitE' + (i + 1)).innerHTML += `${units[i]}`;


    }

}




function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

function init(){
    includeHTML();
    calculate();
}
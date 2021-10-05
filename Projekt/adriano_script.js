function calculate() {


    let amounts = [62.5, 25, 0.25, 0.75, 0.25, 0.5, 0.25, 37.5, 0.25, 62.5, 125, 0.25, 0.25, 5, 10, 50, 10];
    let units = ['g', 'g', 'ganze', 'Zehe(n)', 'Knolle(n)', 'Dose(n)', 'ganze', 'ml', 'g', 'ml', 'g', 'g', 'ganze(s)', 'g', 'g', 'g', 'g']
    let sum;

    let portion = document.getElementById('inputPortion').value;

    for (let i = 0; i < amounts.length; i++) {
        sum = amounts[i] * portion;
        document.getElementById('amount' + (i + 1)).innerHTML = '';
        document.getElementById('unit' + (i + 1)).innerHTML = '';
        document.getElementById('amount' + (i + 1)).innerHTML += `${(sum.toFixed(1)).replace(".", ",")}`;
        document.getElementById('unit' + (i + 1)).innerHTML += `${units[i]}`;
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
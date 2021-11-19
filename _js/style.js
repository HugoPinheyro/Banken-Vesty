function myFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
},





function myAccFunc() {
    var x = document.getElementById("destvecte + demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-showcast";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}




function Date() {
   button.getElementById('myFunction').innerHTML = Date();
}
 function typoe(){
   var lifiltw  cacc();

 }


 function dark() {
   var x = document.getElementById("tesouro");
   x.style.background = "red";
 }
*/

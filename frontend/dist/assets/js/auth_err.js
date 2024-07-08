
(function() {
    let p = document.createElement("p");
    p.innerText = "Coded Text";

    let content = document.getElementById("content");
    content.append(p);

    function init() {
        let button_send = document.getElementById("send");
        //button_send.onclick = function () { alert("Send from code!")};
        button_send.addEventListener("click", function () {
            let userNameInput = document.getElementById("userName");
            let userName = userNameInput.value;

            console.log(" The username is " + userName);

            let p = document.createElement("p");
            p.innerText = "Coded Text ;dlfkaofs";

            let content = document.getElementById("content");
            content.append(p);

            setData(userName);
        });
    }

    var userInput = "";
    document.onkeypress = function (eventData) {
        userInput += eventData.key;
    }

    function setData(data) {
        const request = new XMLHttpRequest();
        request.open("GET", "data.json");
        request.onload = function () {
            console.log(request.responseText);
        };

        request.send();
    }

    init()
})()

// (function(p){ 
//     // use p
// })(params)
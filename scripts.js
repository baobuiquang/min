//Text Format
function textFormat() {
    var textInput = document.getElementById("text-input").value;
    var textOutput = textInput;
    var i = 0;

    //Removes "_" from both sides of str
    textOutput = textOutput.trim();

    //Turn string to array
    var arr = textOutput.split("");

    //Get str length
    var length = 0;
    while (arr[i] != undefined) {
        length++;
        i++;
    }

    //-------------- CORE FUNCTION --------------

    //Turn "__" to "_"
    for (i = 0; i < length; i++) {
        if (arr[i] == " " && arr[i + 1] == " ") {
            while (arr[i + 1] == " ") {
                var u;
                for (u = i; u < length - 1; u++) {
                    arr[u] = arr[u + 1];
                }
                length--;
            }
        }
    }

    //Turn "a_._" to "a._"
    for (i = 0; i < length; i++) {
        if (arr[i] == " " && (arr[i + 1] == "." || arr[i + 1] == "," || arr[i + 1] == ";" || arr[i + 1] == "!" || arr[i + 1] == "?" || arr[i + 1] == ")" || arr[i + 1] == "]" || arr[i + 1] == "}")) {
            var u;
            for (u = i; u < length - 1; u++) {
                arr[u] = arr[u + 1];
            }
            length--;
        }
    }

    //Turn ".A" to "._A"
    for (i = 0; i < length; i++) {
        if ((arr[i] == "." || arr[i] == "," || arr[i] == ";" || arr[i] == "!" || arr[i] == "?" || arr[i] == ")" || arr[i] == "]" || arr[i] == "}") && arr[i + 1] != " ") {
            var u;
            for (u = length; u >= i + 2; u--) {
                arr[u] = arr[u - 1];
            }
            arr[i + 1] = " ";
            length++;
        }
    }

    //Turn "a(" to "a_("
    for (i = 0; i < length; i++) {
        if ((arr[i] == "(" || arr[i] == "{" || arr[i] == "[") && arr[i - 1] != " ") {
            var u;
            for (u = length; u >= i + 1; u--) {
                arr[u] = arr[u - 1];
            }
            arr[i] = " ";
            length++;
        }
    }
    //Turn "(_A" to "(A"
    for (i = 0; i < length; i++) {
        if ((arr[i] == "(" || arr[i] == "{" || arr[i] == "[") && arr[i + 1] == " ") {
            var u;
            for (u = i + 1; u < length - 1; u++) {
                arr[u] = arr[u + 1];
            }
            length--;
        }
    }

    //Capitalize: Turn "._a" to "._A"
    for (i = 0; i < length; i++) {
        textOutput = "";
        for (u = 0; u < length; u++) {
            textOutput += arr[u];
        }
        //Dont "," or ";"
        if ((arr[i] == "." || arr[i] == "!" || arr[i] == "?") && arr[i + 1] == " ") {
            arr[i + 2] = textOutput.charAt(i + 2).toUpperCase();
        }
    }

    //Final step: Turn array into string again
    textOutput = "";
    for (i = 0; i < length; i++) {
        textOutput += arr[i];
    }
    document.getElementById("text-output").innerHTML = textOutput ? textOutput : "Error: No Input Found!";
}

//Bold
function textBold() {
    var textInput = document.getElementById("text-input").value;

    var textOutput = "<b>";
    textOutput += textInput;
    textOutput += "</b>";

    document.getElementById("text-output").innerHTML = textOutput ? textOutput : "Error: No Input Found!";
}

//Italic
function textItalic() {
    var textInput = document.getElementById("text-input").value;

    var textOutput = "<i>";
    textOutput += textInput;
    textOutput += "</i>";

    document.getElementById("text-output").innerHTML = textOutput ? textOutput : "Error: No Input Found!";
}

//Copy
function copyToClip(str) {
    function listener(e) {
        e.clipboardData.setData("text/html", str);
        e.clipboardData.setData("text/plain", str);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    // Snackbar
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}
const display = document.getElementById("display");


//  APPEND VALUES

function append(value) {

    if (display.value === "Error") {
        display.value = "";
    }

    display.value += value;
}

//    CLEAR DISPLAY

function clearDisplay() {
    display.value = "";
}

//    DELETE LAST CHARACTER

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

//    CALCULATE RESULT

function calculate() {

    try {

        if (display.value.trim() === "") return;

        display.value = eval(display.value);

    } catch {

        display.value = "Error";

    }

}

//    KEYBOARD SUPPORT

document.addEventListener("keydown", (e) => {

    const key = e.key;

    // Numbers & Operators
    if (
        !isNaN(key) ||
        ["+", "-", "*", "/", ".", "%"].includes(key)
    ) {

        if (display.value === "Error") {
            display.value = "";
        }

        display.value += key;
    }

    if (key === "Enter" || key === "=") {

        e.preventDefault();
        calculate();

    }

    if (key === "Backspace") {

        deleteLast();

    }

    if (key === "Escape") {

        clearDisplay();

    }

});

//    THEME TOGGLE

function toggleMode() {

    document.body.classList.toggle("light");

    const icon = document.getElementById("themeIcon");

    if (document.body.classList.contains("light")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

}
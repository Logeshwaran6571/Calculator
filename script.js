 
let input = document.querySelector('.inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
 
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch (e) {
                input.value = "Error";
                string = "";
            }
        } else if (value == 'AC') {
            string = "";
            input.value = string;
        } else if (value == 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        } else {
            if (input.value === "Error") {
                string = "";
            }
            string += value;
            input.value = string;
        }
    });
});

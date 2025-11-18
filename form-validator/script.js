const form = document.getElementById('registn-form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword')


form.addEventListener('submit', function(r) {
    r.preventDefault();

    const isRequiredValid = checkRequired([username, email, password, 
        confirmPassword])

        let isFormValid = isRequiredValid;

        if(isRequiredValid) {
            const isUsernameValid = checkLength(username,3,15);
            const isEmailValid = checkEmail(email);
            const isPasswordValid = checkLength(password,6,25);
            const isPasswordsMatch = checkPasswordMatch(password, confirmPassword);

            isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordsMatch;

        }

        if(isFormValid) {
            alert("Registration Successful :)")
            form.reset()

            document.querySelectorAll(".form-grp").forEach(group => {
                group.className = "form-grp"
            })
        }

});

function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${formatFieldName(input)}must be at least ${min} characters.`)
        return false
    } else if(input.value.length > max) {
        showError(input, `${formatFieldName(input)}must be less than ${max} characters.`)
        return false
    } else {
        showSuccess(input);
        return true;

    }
}

function checkEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(emailRegex.test(email.value.trim())) {
        showSuccess(email)
        return true;
    } else {
        showError(email, "Email is not valid")
        return false;
    }
}


function checkPasswordMatch(input1, input2) {
    if(input1.value === input2.value) {
        return true;
    } else {
        showError(input2, "Please enter same password");
        return false;
    }
}







function checkRequired(inputArray) {
    let isValid = true

    inputArray.forEach(input => {
        if(input.value.trim() === "") {
            showError(input, `${formatFieldName(input)} is required`)
            isValid = false
        } else {
            showSuccess(input)
        }
    })
    return isValid
}

function formatFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


function showError(input, message){
    const formGrp = input.parentElement;
    formGrp.className = "form-grp error";
    const small = formGrp.querySelector("small")
    small.innerText = message
}

function showSuccess(input) {
    const formGrp = input.parentElement;
    formGrp.className = "form-grp success";
}








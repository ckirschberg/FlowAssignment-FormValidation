function runJs() {

    document.getElementById("btnSubmit").addEventListener("click", (e) => {
        const email = document.getElementById("email").value.trim().toLowerCase()
        const name = document.getElementById("name").value.trim()
        const message = document.getElementById("message").value.trim()
        console.log(email, name, message);

        let error = "";
        if (isEmpty(email)) {
            error += "Email cannot be empty<br>";
        } else {
            if (validEmail(email) === null) {
                error += "Email is not a valid email address<br>";
            } else {
                if (!validCphBusinessEmail(email)) {
                    error += "Email is not a valid cphbusiness email<br>";
                }
            }
        }
        if (isEmpty(name)) {
            error += "Name cannot be empty<br>";
        }
        if (isEmpty(message)) {
            error += "Message cannot be empty<br>";
        } else {
            if (!minCharacters(message, 8)) {
                error += "Message must be 8 characters<br>";
            }
        }
        
        const dayNumber = new Date().getDay();
        if (dayNumber === 0 || dayNumber > 4) {
            error += "You are not even allowed to contact us on Fridays, Saturdays or Sundays, so why even try to beat the validation!";
        }

        if (error !== "") {
            e.preventDefault();
            document.getElementById("response").innerHTML = error;
        }
        else {
            document.getElementById("response").innerHTML = "Success! We can post the form"
        }
    });
}

function minCharacters(value, amount) {
    return value.length >= amount
}
function isEmpty(value) {
    return value === '';
}
function validEmail(email) 
{
    const valid = email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      );
      console.log(valid);
      return valid;
}
function validCphBusinessEmail(email) {
    const index = email.indexOf('@');
    const stringAfterAt = email.substring(index);
    console.log(stringAfterAt);
    return stringAfterAt === "@cphbusiness.dk";
}
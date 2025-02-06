document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if(name && email) {
        document.getElementById("response").innerHTML = `
            <p>Dziękujemy za kontakt, ${name}. Odpowiemy na Twój email: ${email} wkrótce!</p>
        `;
    } else {
        document.getElementById("response").innerHTML = "<p>Proszę wypełnić wszystkie pola!</p>";
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form[action^="https://formspree.io/"]');
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const data = new FormData(form);
        fetch(form.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "))
                    } else {
                        alert("Oops! There was a problem submitting your form")
                    }
                })
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form")
        });
    });
});
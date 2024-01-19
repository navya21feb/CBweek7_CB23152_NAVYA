function showContent(id) {
    console.log("showContent called with ID:", id);

    // Add 'hiddenContent' class to all content sections
    const pages = ['home', 'destination', 'contact'];
    pages.forEach(page => {
        const pageElement = document.getElementById(page);
        if (pageElement) {
            pageElement.classList.add('hiddenContent');
        }
    });

    // Remove 'hiddenContent' class from the selected content
    const selectedContent = document.getElementById(id);
    if (selectedContent) {
        selectedContent.classList.remove('hiddenContent');
    } else {
        console.error("Selected content not found for ID:", id);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    let optionsDropdown = document.getElementById("options");
    let helpPanel = document.getElementById("helpPanel");

    if (optionsDropdown && helpPanel) {
        optionsDropdown.addEventListener("change", function () {
            let selectedOption = optionsDropdown.value;
            console.log("Selected option:", selectedOption);

            // Hide all content sections
            const contentSections = helpPanel.getElementsByClassName("hiddenContent");
            for (let i = 0; i < contentSections.length; i++) {
                contentSections[i].classList.add("hiddenContent");
            }

            // Show the selected content section
            let selectedContent = document.getElementById(selectedOption);
            if (selectedContent) {
                selectedContent.classList.remove("hiddenContent");
            } else {
                console.error("Selected option does not have a corresponding content section.");
            }
        });
    } else {
        console.error("Options dropdown or helpPanel not found. Make sure the elements with ids 'options' and 'helpPanel' exist.");
    }
});

function validate() {
    let name =
        document.getElementById("name").value;
    let subject =
        document.getElementById("subject").value;
    let phone =
        document.getElementById("phone").value;
    let email =
        document.getElementById("email").value;
    let message =
        document.getElementById("message").value;
    let error_message =
        document.getElementById("error_message");

    error_message.style.padding = "10px";

    let errors = [];

    if (name.length < 5) {
        errors.push("Please Enter a valid Name");
    }
    if (subject.length < 10) {
        errors.push("Please Enter a Correct Subject");
    }
    if (isNaN(phone) || phone.length != 10) {
        errors.push("Please Enter a valid Phone Number");
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        errors.push(
            "Please Enter a valid Email");
    }
    if (message.length <= 40) {
        errors.push(
            "Please Enter More Than 40 Characters");
    }

    if (errors.length > 0) {
        error_message.innerHTML =
            errors.join("<br>");
        return false;
    }
    else {
        alert(
            "Form Submitted Successfully!");
        return true;
    }
}

var inputval = document.querySelector('#cityinput')
var btn = document.querySelector('#add');
var city = document.querySelector('#cityoutput')
var descrip = document.querySelector('#description')
var temp = document.querySelector('#temp')
var wind = document.querySelector('#wind')
apik = "3045dd712ffe6e702e3245525ac7fa38"
function convertion(val) {
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputval.value + '&appid=' + apik)
        .then(res => res.json())


        .then(data => {
            var nameval = data['name']
            var descrip = data['weather']['0']['description']
            var tempature = data['main']['temp']
            var wndspd = data['wind']['speed']
            city.innerHTML = `Weather of <span>${nameval}<span>`
            temp.innerHTML = `Temperature: <span>${ convertion(tempature)} C</span>`
            description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
            wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
        
          })
        
          .catch(err => alert('You entered Wrong city name'))
        })
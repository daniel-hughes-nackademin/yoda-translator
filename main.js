let yodaField = document.getElementById("yoda-field");
let yodaButton = document.getElementById("yoda-button");
let errorMessage = document.getElementById("error-message");
let translation = document.getElementById("translation");

yodaButton.addEventListener('click', e => {
    hideH4Elements();

    if(yodaField.value === "" ){

        errorMessage.textContent = "You need to enter text in the field to translate";
        errorMessage.style.color = "red";
        errorMessage.style.textAlign = "center";
        errorMessage.style.display = "block";
    }
    else {
        
        let url = 'https://api.funtranslations.com/translate/yoda.json';
        let phrase = yodaField.value.replace(' ', '%20');
        url += `?text=${phrase}`;

        console.log(url);

        fetch(url, {
            method: 'get'
        })
        .then(resp => resp.json()) // Transform the data into json
        .then(data => {
          // Use the data

        console.log(data.contents.translated);
          translation.textContent = data.contents.translated;
          translation.style.display = "block";
          })
        .catch(error => {
        console.log(error);
        });
        }
    })


function hideH4Elements() {
    translation.style.display = "none";
    errorMessage.style.display = "none";
}


window.onload = () => {

    console.log("This is JS from 'Get Started' page!")

const getStartedUrl = "{% url 'get-started' %}";

getStartedButton = document.querySelector('#get-started-button').onclick = () => {
    window.location.href = getStartedUrl;
}





}

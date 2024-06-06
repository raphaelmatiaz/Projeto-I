window.onload = () => {

console.log("hello")

const getStartedUrl = "{% url 'get-started' %}";

getStartedButton = document.querySelector('#get-started-button').onclick = () => {
    window.location.href = getStartedUrl;
}





}

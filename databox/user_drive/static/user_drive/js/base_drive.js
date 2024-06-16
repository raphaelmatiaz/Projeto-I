
window.onload = async () => {


console.log('this is JS for base drive');

// CONSTANTS
const newFolderButton = document.querySelector('#new-folder');
const popUpView = document.querySelector('#pop-up-view');
const popUpForm = document.querySelector('#create-new-folder-wrapper');
const cancelButton = document.querySelector('#cancel');


// 'NEW FOLDER' BUTTON 
newFolderButton.addEventListener('click', () => {
    console.log("button clicked");
    popUpView.style.display = "flex";
    popUpForm.style.display = "flex"
    popUpView.setAttribute('active', 'True');
    popUpForm.setAttribute('active', 'True');

    popUpView.addEventListener('click', () => {
        popUpView.style.display = "none";
        popUpForm.style.display = "none"
        popUpView.setAttribute('active', 'False');
        popUpForm.setAttribute('active', 'False');
    })
});

// 'UPLOAD FILES' BUTTON 



// NEW FOLDER FORM 'CANCEL' BUTTON
cancelButton.addEventListener('click', () => {
    console.log("cancel button clicked");
    popUpView.style.display = "none";
    popUpForm.style.display = "none"
    popUpView.setAttribute('active', 'False');
    popUpForm.setAttribute('active', 'False');
});


// NEW FOLDER FORM 'SUBMIT' BUTTON
}
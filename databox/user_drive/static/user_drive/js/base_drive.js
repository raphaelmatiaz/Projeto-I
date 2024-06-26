
window.onload = async () => {


console.log('this is JS for base drive');

// se backbutton existir atribuir event listner, senao nao atribuir
const backButton = document.querySelector('#back-button');
    if (backButton) {
    backButton.addEventListener('click', () => {
        window.history.back();
      });
    }

// CONSTANTS

// buttons
const newFolderButton = document.querySelector('#new-folder');
const uploadFilesBTN = document.querySelector('#upload-files-button');
const newFolderCancelBTN = document.querySelector('#cancel-new-folder');
const uploadFilesCancelBTN = document.querySelector('#cancel-file-upload');

// views
const popUpView = document.querySelector('#pop-up-view');
const newFolderForm = document.querySelector('#create-new-folder-wrapper');
const uploadFilesForm = document.querySelector('#upload-file-wrapper')


// 'NEW FOLDER' BUTTON 
newFolderButton.addEventListener('click', () => {
    console.log("button clicked");
    popUpView.style.display = "flex";
    newFolderForm.style.display = "flex"
    popUpView.setAttribute('active', 'True');
    newFolderForm.setAttribute('active', 'True');

    popUpView.addEventListener('click', () => {
        popUpView.style.display = "none";
        newFolderForm.style.display = "none"
        popUpView.setAttribute('active', 'False');
        newFolderForm.setAttribute('active', 'False');
    })
});

// 'UPLOAD FILES' BUTTON 
uploadFilesBTN.addEventListener('click', () => {
    console.log("button clicked");
    popUpView.style.display = "flex";
    uploadFilesForm.style.display = "flex"
    popUpView.setAttribute('active', 'True');
    uploadFilesForm.setAttribute('active', 'True');

    popUpView.addEventListener('click', () => {
        popUpView.style.display = "none";
        uploadFilesForm.style.display = "none"
        popUpView.setAttribute('active', 'False');
        uploadFilesForm.setAttribute('active', 'False');
    })
});


// NEW FOLDER FORM 'CANCEL' BUTTON
// newFolderCancelBTN.addEventListener('click', () => {
//     console.log("cancel button clicked");
//     popUpView.style.display = "none";
//     newFolderForm.style.display = "none"
//     popUpView.setAttribute('active', 'False');
//     newFolderForm.setAttribute('active', 'False');
// });


// NEW FOLDER FORM 'SUBMIT' BUTTON






// UPLOAD FILE 'CANCEL' BUTTON
uploadFilesCancelBTN.addEventListener('click', () => {
    console.log("cancel button clicked");
    popUpView.style.display = "none";
    popUpForm.style.display = "none"
    popUpView.setAttribute('active', 'False');
    popUpForm.setAttribute('active', 'False');
});


// FORMS
const fileUploadForm = document.getElementById('file-upload-form');
// fileUploadForm.addEventListener('submit', (event) => {
//     const hasFile = document.getElementById('browse-files-button').files.length > 0;
//     if (!hasFile) {
//       alert("Please select a file to upload.");
//       event.preventDefault(); // Prevent form submission
//     }
// });

}
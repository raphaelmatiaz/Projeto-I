# DataBox

**DataBox** is a web-app solution for personal file management and storage. It was built using  the **Django** web framework as well as vanilla JavaScript and CSS, and was created as my final project for the first year in *'Programacão Web - 23/25'* course at **Escola de Tecnologias, Inovação e Criação do Algarve - ETIC Algarve**.

#
## Goal of this APP

**DataBox** enables users to manage personal files via a personal **drive** interface associated with their account. The app features a Front-Office for users, and a Back-Office for staff users.

**Users**
Users can register an account and login to gain access to a drive interface, through which they are able to create folders and upload files, as well as download and/or delete them. The app handles folder nesting and folder tree navigation, allowing users to create subsequent folders within parent folders, and so on, while storing files within each folder from said tree.

Users can logout and log back into their accounts, or change their password.
Users cannot access the staff user backoffice with their account.


**Staff Users**
Staff users gain access to a backoffice interface for managing users. 
Staff users cannot access data from user's drives.

#
## Project Structure

The project contains three Django apps:

- databox: The main app
- user_auth: Which handles the landing page of the app, as well as user authentication logic, such as account registries and login and their associated templates.
- user_drive: The core of the project. It handles all the things related to the drive and the file managing features.


#
## Installation

In order to install the app, execute the following steps in order:



1. ***Cloning the Repository*** : 

Open up the terminal of your choice and **cd** into the location where you'd like to clone the repository, for example: _/desktop_. Then type the following command:
```
     git clone https://github.com/raphaelmatiaz/Projeto-I.git
```
Alteratively, you may also dowload and unzip the repo by clicking the green <**CODE**> button on the top right corner of the repo, and then clicking **Download Zip**.

2. ***Entering the app from the cloned repository*** : 

From you current path location, **cd** into the cloned repository:
```
     cd Projeto-I
```

Then **cd** into the app:
```
    cd databox
```

3. ***Installing and Running the APP*** : 

Now that you are in the cloned repository path, you may install the app via the following command:
```
    make install
```

4.***Creating a Super-User*** : 

In case you want to use the app's backoffice, a user with staff privillages will be required. You can create one via:
```
    make super-user
```
This command will prompt you through django's default super-user creation system for details.


---------------------
/!\ **NOTE** /!\  
_Make sure **Docker** and **docker-compose** are propperly installed on your system in order for these steps to work! If you are on windows, make sure docker daemon is running.

#
## Using Databox

The app will be running immedialy after intallation. You can open up a new browser window and acces the following url to start interacting with it:
```
    http://localhost:8000/
```

The app is intuitive to use. You can start by registering an account and logging in to access your personal drive, and then manage your files through the dedicated UI.

The **New Folder** button will create a new folder within your current folder-tree path (if you are in 'home' it will create a folder within 'home', if you are in a folder named 'Folder A' it will create a new folder within 'Folder A' and so on). The same is true for file uploads using the **Upload Files** button.

You can open any folder and view it's contents by clicking on it and you may download or delete each folder and/or file by clicking their corresponding **download** and **delete** icons.

You may logout by hovering over the profile icon in the top right corner and clicking the **Logout** button.

**START AND STOP THE APP**

/!\ **NOTE** /!\  
Make sure you followed the steps under **Installation** before you use the following commands. You may encounter issues otherwise.

For any subsequent uses of the app:

* Start the app
```
make start
```
* Stop the app
```
make stop
```
Alternatively, you may also access the terminal instance running the app, and use "**CTRL + C**" to terminate the current running process.

------------------
------------------
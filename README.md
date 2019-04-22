# Vue.js Workshop Demos and Tasks
This repository contains all the demos and tasks that were used during the Vue.js workshop.

## Prerequisites
### Basic knowledge of
- Javascript (ES5 and ES6)
- Typescript
- Git

### Software
- [Node.js 10.15.3 LTS](https://nodejs.org/dist/v10.15.3/node-v10.15.3-x86.msi)
- [Git and Git Bash](https://git-scm.com/downloads)
- [Vue Cli 3](https://cli.vuejs.org/guide/installation.html)
- Text Editor or IDE like: _Visual Studio Code / Sublime / Atom / WebStorm_.
(Throughout the course we are going to use only _Visual Studio Code_)
- Useful extensions:
  - [Vue.js devtools (for Chrome)](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Vetur (for VS Code)](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [TSLint (for VS Code)](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)

## Tasks
### Task 1
Using the already installed Vue Cli, create a new project using the following requirements:
- Name: **first-vue-project**
- Custom configuration
  - Babel
  - Typescript
  - TSLint
- Serve the created project and open it in the browser
- Build the project

### Task 2
- In this task you will practice the usage of: **v-for** along with **v-bind:key**, **v-class**, **v-on:click** and class methods.
- Checkout the `task-2-initial` branch. Run `npm install` to get all the necessary dependencies.
- In the checkouted branch you will find an alredy created component called _UsersComponent.vue_.
- Use `npm run serve` in the main project forlder to run it
- Your task is to populate the already created table layout with the provided users information.
- The whole list of users is located in the _users.ts_ file and it is already imported and added as a local variable in the _UsersComponent_.
- In order to complete this task follow the **Todo - X** comments that are written as guidelines for you inside each component. You should respect their order.

### Task 3
- In this task you will practice to pass data between components using the vue component's props and output events. You are going to practice the usage of html forms in vue, too.
- Checkout the `task-3-initial` branch. Run the `npm install` to get all the necessary dependencies.
- In the checkouted branch you will find 3 components: **App**, **UserDetails** and **EditUserForm**.
- All the necessary data is located in the `./src/data` folder.
- Use `npm run serve` in the main project forlder to run it
- Your first goal is to loop through the array of users and display their information using the **UserDetails** component. The data for each user should be passed as separate props.
- Your second goal is to add an edit button inside the **UserDetails** component that will allow you to edit the information of each user. We have already created a layout of the edit form for you. You can find it in **EditUserForm**. You should pass the data of the selected user as props exactly the way you did for the **UserDetails** component. The only difference here is that we are going to create a copy of these props because we are going to change their value when editing and it is not a good idea to change the props value directly. We consider that an advanced use case so we have added the copying functionality for you. Feel free to check how exactly we have achieved that.
- You third goal is to use the copy of the user data in order to bind it to the input fields using the `v-model` binding.
- You last goal is to save the edited user or just to cancel the editing process by removing the **EditUserForm** component from the DOM tree. (Use `v-if` insead of `v-show`)
- In order to complete this task follow the **Todo - X** comments that are written as guidelines for you inside each component. You should respect their order.

### Task 4
- In this task you will practice injecting dependencies into Vue components via TypeDI. You will also gain first-hand experience of configuring the Vue router and navigating between pages.
- Checkout the `task-4-initial` branch. Run the `npm install` to get all the necessary dependencies.
- In the branch, you will find two components in the `./src/views` folder: **Users** and **Posts**, as well as an **App** component in the `./src` folder.
In the `./src/models` folder you will find two classes - **User** and **Post**, that repsesent structure of the entities that we will use.
In the `./src/services` folder there are two classes, **UserService** and **PostService**, that will be used for retrieving external data.
- Use `npm run serve` in the main project forlder to run it
- Your first goal is to make the two service classes injectable, and implement their methods, so that they retrieve `users` and `posts` from [JSON Placeholder API](https://jsonplaceholder.typicode.com). You can use the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Your next goal is to configure the Vue router in the `./src/router.ts` file, so you can navigate to the **Users** and **Posts** views
- Your third goal is to inject the **UserService** in the **Users** component and use the service to retrieve all users. Then you should list all the users and display them inside a table. For each user, you should also include a link/button that leads to the **Posts** page.
- Your last goal is to inject the **UserService** and **PostService** in the **Posts** component and retrieve the currently selected user (from the `:id` parameter in the URL), as well as all his posts. 
Then you should display the current user name and all his posts (using `v-for`). You should also add a link/button that sends you to the **Users** page.
- In order to complete this task follow the **Todo - X** comments that are written as guidelines for you inside each component. You should respect their order.

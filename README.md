## Dango Task

## Description

Test for Dango, using Node V16.15.1

# Tabla de contenido

1. [Technologies used](#technologies-used)
2. [Boilerplate Structure](#boilerplate-structure)
3. [Steps to install in the development environment](#steps-to-install-in-the-development-environment)
4. [Automatic unit tests](#automatic-unit-tests)
5. [Run the project](#run-the-project)

## Technologies used

* **JS**: Javascript was chosen instead of TypeScript for its simplicity of configuration and for being more commonly known and easier to use than TypeScript.
* **SASS**: We chose SASS instead of CSS to manage the styling, for the advantages it offers such as `imports` and its tree structure which helps in keeping everything more organized.
* **React Testing Library**: We chose `React Testing Library` and not `Enzyme` for the reasons described in the official documentation of [React Testing Library](https://testing-library.com/docs/react-testing-library/intro#the-problem).
* **Sweetalert2 React**: A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes. Zero dependencies.
* **React Bootstrap**: Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.

> If you are not familiar or do not like any of these technologies, you can change them and tweak this boilerplate as you feel more comfortable.

## Boilerplate Structure

* **assets/**: This directory contains all the images used in the project, you can add folders like `images` and `icons` to give it a better structure.
* **components/**: This directory contains all the components of the application, for this boilerplate a simple component was created as example.
* **constants/**: This directory should contain all the constants of the application, whether as text or as enum.
* **scss/**: In this directory are the styles of the application, if you want you can create additional folders inside it to give it more structure, such as `components` to place the styles only referring to the components of the application.
* **tests/**: Contains the automatic tests of the application.

You can add, remove or modify this directory structure as you think necessary.

## Steps to install in the development environment

You can use [nvm](https://github.com/nvm-sh/nvm) to install the `node` version used when creating the boilerplate by executing the following command:

```
nvm use
```

To install the dependencies you can use `yarn` or `npm`.

```
yarn install
```
o
```
npm i
```

## Run the project

To run the project in development mode run the following command:

```
yarn start
```
o
```
npm run start
```

This will open a tab in the browser configured by default on port `3000`.

You can see all available scripts in the `package.json` file.

## Automatic unit tests

The boilerplate is configured with automatic testing using `React Testing Library`. If you haven't heard of this library before you can find its official documentation [here](https://testing-library.com/docs/react-testing-library/intro).

To run the tests use the command:

```
yarn test
```
o
```
npm t
```

If you don't want to use `React Testing Library`, you can remove it from the dependencies and install the library of your choice.

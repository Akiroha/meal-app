# Meal App

This React Native application is a meal app designed to help users discover and manage meals based on different categories. It utilizes Expo for easy development and @react-navigation for seamless navigation within the app.

## Features

- Built with Expo and Expo Icons for streamlined development.
- Utilizes TypeScript for improved code maintainability and type safety.
- Local data functionality using dummy data located at `data/dummy-data.ts`.
- Implements stack and drawer navigation with @react-navigation.
- Manages app-wide state using React Redux and Redux Toolkit.

## Screens

### Categories Screen

- Displays categories using a custom CategoryGridTitle component.
- Navigates to the Meals Overview Screen when a category is pressed.

### Favorites Screen

- Displays favorited meals using a MealsList component.
- Navigates to the Meal Detail Screen when a meal is pressed.
- Provides feedback if there are no favorited meals.

### Meals Overview Screen

- Displays all meals for a selected category.

### Meal Detail Screen

- Displays details of a specific meal, including ingredients and steps.

## Installation

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Start the development server: `npm start` or `expo start`.

## Technologies Used

- React Native
- Expo
- TypeScript
- @react-navigation
- React Redux
- Redux Toolkit

## Author

[Agbai Iroha](https://github.com/Akiroha)

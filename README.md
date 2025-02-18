# IMDb Top 250 Movies Website

This React application displays the top 250 movies from IMDb. The app fetches the movie data from a JSON file hosted on GitHub and renders each movie's details such as:

- **Name**: The movie's title.
- **Year**: The year of release.
- **Rating**: IMDb rating of the movie.
- **Genre**: Movie genre(s).
- **Director**: Directors of the movie.
- **Actors**: Actors featured in the movie.
- **Description**: A brief plot description of the movie.

Each movie is displayed in a "movie card" format. The application also provides a clickable link to the movie's IMDb page for more information.

## Features

- **Movie Cards**: Displays each movie in a card format with detailed information such as name, year, rating, genre, director, and actors.
- **Fallback for Missing Images**: If a movie does not have an image available, a placeholder or fallback message is displayed to indicate the absence of the image.
- **Responsive Layout**: The website is designed to adjust its layout according to different screen sizes, ensuring a pleasant experience on both desktop and mobile devices.

## Technologies Used

- **React**: The core library used to build the user interface and manage the application state.
- **JavaScript (ES6+)**: Used for writing the logic and functionality of the app.
- **CSS**: Styling is applied to create visually appealing movie cards and layout.
- **React Hooks**: `useState` and `useEffect` are used for managing the state and handling side effects, like fetching data from the API.

## Key Components

- **App.js**: The main React component that fetches the IMDb Top 250 data and manages the state using the `useState` and `useEffect` hooks. It stores the fetched movie data and renders the `Movie` component for each movie.
  
- **Movie.jsx**: A stateless component that displays an individual movie’s details. It receives the movie data as props and renders the movie card with information like name, year, rating, genre, director, and actors.

## Data Handling

The movie data is fetched from a JSON file hosted on GitHub. Once the data is fetched, it is stored in the state using the `setMovies` function provided by `useState`. The movie array is then mapped over using the `map` function to render individual `Movie` components for each movie object in the array.

For each movie, an image is displayed along with its details. If the movie doesn't have an image URL, a fallback message or a default placeholder image is shown. This fallback is handled through conditional rendering in the `Movie.jsx` component.

## Styling

- The movie cards are styled to appear as rectangular cards with a shadow effect for depth.
- Each movie card has a hover effect that makes it glow when the user hovers over it.
- CSS classes are used to style the individual elements like the movie name, rating, and description. A fallback for missing images is also styled to provide a clear indication when no image is available.

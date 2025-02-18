# IMDb Top 250 Movies Website

This is a simple React application that displays the top 250 movies from IMDb. It fetches the movie data from a JSON file hosted on GitHub and renders each movie's details, such as name, year, rating, genre, director, actors, and description. Each movie is displayed in a "movie card" with an option to view the movie on IMDb.

## Features

- **Movie Cards**: Each movie is displayed as a card containing details like the movie's name, year, rating, genre, director, actors, and description.
- **Image Handling**: If a movie does not have an image, a placeholder or message is displayed.
- **External Links**: You can visit the IMDb page for each movie by clicking on the "View on IMDb" link.
- **Responsive Design**: The layout adapts to different screen sizes for better user experience.

## Technologies Used

- **React**: For building the user interface and managing state.
- **JavaScript (ES6+)**: To write the logic of the app.
- **CSS**: For styling the components and ensuring the layout is visually appealing.
- **React Hooks**: Using `useState` and `useEffect` for state management and fetching data from the API.

## Installation

To get started with the project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/imdb-top-250.git

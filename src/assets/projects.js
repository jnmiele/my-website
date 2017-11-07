const projects = [
      {
        name: 'Flatgram',
        description: 'Flatgram is a social media application that allowed users to share their favorite photos with friends.',
        bullets: ['Utilized RESTful routing to provide users with with full CRUD capabilities.', 'Prevented unauthorized users from viewing restricted content by incorporating user-password authorization.'],
        github: 'https://github.com/flatiron-lessons/flatgram',
        tools: ['Ruby', 'Ruby on Rails', 'Semantic-UI'],
        url: 'youtubeurl',
        image: 'images/uc.jpg'
      },
      {
        name: 'The Spots',
        description: 'The Spots is a web application that allows users to search for their favorite restaurant and add it to their list of spots.',
        bullets: ['Built back-end using Ruby on Rails that stored user credentials and spots via a PostgreSQL database.', 'Used JSON Web Tokens (JWT) to prevent unauthorized users from viewing restricted content.', 'Provided users with the ability to search for specific restaurants via the Yelp Search API.'],
        github: 'https://github.com/jnmiele/restaurant-tracker',
        tools: ['Ruby', 'Ruby on Rails', 'JavaScript', 'React', 'Yelp Search API'],
        url: 'youtubeurl2',
        image: 'images/hh.png'
      },
      {
        name: 'Hitchhiker',
        description: 'Hitchhiker is a ride-sharing application that allows users to carpool with one another to specified locations.',
        bullets: ['Created a single-page application using React and Redux for the front-end.', 'Utilized a mix of Semantic UI and custom styling to build an interactive user interface.'],
        github: 'https://github.com/jnmiele/final-project',
        tools: ['Ruby', 'Ruby on Rails', 'JavaScript', 'React', 'Redux', 'Google Maps API'],
        url: 'https://www.youtube.com/watch?v=_01dFqcXElM',
        image: 'images/hh.png'
      }
    ]

export { projects }
const projects = [
    {
        name: 'hitchhiker',
        description: 'Hitchhiker is a ride-sharing application that allows users to carpool with one another to specified locations.',
        bullets: ['Created a single-page application using React and Redux for the front-end.', 'Utilized a mix of Semantic UI and custom styling to build an interactive user interface.','Constructed back-end using Ruby on Rails creating a PostgreSQL database.'],
        github: 'https://github.com/jnmiele/final-project',
        backend: 'Ruby, Ruby on Rails, PostgreSQL',
        frontend: 'JavaScript, React, Redux, Semantic UI',
        APIs: 'Google Maps API',
        url: 'https://www.youtube.com/embed/_01dFqcXElM',
        image: 'images/hitchhiker.png'
      },
      {
        name: 'the spots',
        description: 'The Spots is a web application that allows users to search for their favorite restaurant and add it to their list of spots.',
        bullets: ['Built back-end using Ruby on Rails that stored user credentials and spots via a PostgreSQL database.', 'Used JSON Web Tokens (JWT) to prevent unauthorized users from viewing restricted content.', 'Provided users with the ability to search for specific restaurants via the Yelp Search API.'],
        github: 'https://github.com/jnmiele/restaurant-tracker',
        backend: 'Ruby, Ruby on Rails, PostgreSQL Database',
        frontend: 'JavaScript, React, Semantic UI',
        APIs: 'Yelp Search',
        url: 'youtubeurl2',
        image: 'images/the-spots.png'
      },
      {
        name: 'flatgram',
        description: 'Flatgram is a social media application that allowed users to share their favorite photos with friends.',
        bullets: ['Utilized RESTful routing to provide users with with full CRUD capabilities.', 'Prevented unauthorized users from viewing restricted content by incorporating user-password authorization.', 'Designed the front-end using a combination of ERB and Semantic UI to style.'],
        github: 'https://github.com/flatiron-lessons/flatgram',
        backend: 'Ruby, Ruby on Rails, SQL Database',
        frontend: 'Ruby, Semantic UI',
        APIs: 'No external APIs',
        url: 'youtubeurl',
        image: 'images/under-construction.jpg'
      }
    ]

export { projects }
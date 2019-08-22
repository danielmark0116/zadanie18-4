const movies = [
  {
    title: 'Psycho',
    desc:
      'A Phoenix secretary embezzles forty thousand dollars from her employers client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother.',
    img:
      'https://m.media-amazon.com/images/M/MV5BNTQwNDM1YzItNDAxZC00NWY2LTk0M2UtNDIwNWI5OGUyNWUxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,672,1000_AL_.jpg'
  },
  {
    title: 'Shutter Island',
    desc:
      'In 1954, a U.S. Marshal investigates the disappearance of a murderer, who escaped from a hospital for the criminally insane.',
    img:
      'https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_CR0,0,675,1000_AL_.jpg'
  },
  {
    title: 'Twin Peaks: Fire Walk with Me',
    desc:
      'A young FBI agent disappears while investigating a murder miles from Twin Peaks that may be related to the future murder of Laura Palmer; the last week of the life of Laura Palmer is chronicled.',
    img:
      'https://m.media-amazon.com/images/M/MV5BMzc5ODcyNTYtMDAwNy00MDhjLWFmOWUtNGVhMDRlYjE1YzNjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
  },
  {
    title: 'The Da Vinci Code',
    desc:
      'A murder inside the Louvre, and clues in Da Vinci paintings, lead to the discovery of a religious mystery protected by a secret society for two thousand years, which could shake the foundations of Christianity.',
    img:
      'https://m.media-amazon.com/images/M/MV5BMjIxMjQyMTc3Nl5BMl5BanBnXkFtZTcwMTA1MDUzMw@@._V1_SY1000_CR0,0,672,1000_AL_.jpg'
  }
];

const Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },

  render: function() {
    return React.createElement(
      'li',
      { className: 'movie-card' },
      React.createElement(MovieTitle, { title: this.props.movie.title }),
      React.createElement(MovieDesc, { desc: this.props.movie.desc }),
      React.createElement(MovieImg, { img: this.props.movie.img })
    );
  }
});

const MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('h2', {}, this.props.title);
  }
});

const MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('p', {}, this.props.desc);
  }
});

const MovieImg = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('img', { src: this.props.img });
  }
});

const movieElements = movies.map(function(movie, id) {
  return React.createElement(Movie, {
    key: id,
    movie: movie,
    className: 'movie-card'
  });
});

const MyApp = React.createElement(
  'div',
  { className: 'container mt-4' },
  React.createElement('h1', { className: 'text-center mb-4' }, 'Lista filmów'),
  React.createElement('ul', {}, movieElements)
);

ReactDOM.render(MyApp, document.getElementById('app'));

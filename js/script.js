import movies from './peliculas.js'

console.log(movies)

const genreContainers = document.querySelectorAll('.genero')

genreContainers.forEach((genreContainer) => {
	const genreId = +genreContainer.id.split('-')[1]

	const filteredMovies = getMoviesByGenre(genreId)

	filteredMovies.forEach((movie) => {
		const posterURL = 'https://image.tmdb.org/t/p/w200' + movie.poster_path
		const movieCard = createCard(movie.title, posterURL)

		genreContainer.appendChild(movieCard)
	})
})

function getMoviesByGenre(genreId) {
	return movies.filter((movie) => movie.genre_ids.includes(genreId))
}

function createCard(title, posterURL) {
	const card = document.createElement('article')
	card.classList.add('card')

	const cardImage = document.createElement('img')
	cardImage.classList.add('card__image')
	cardImage.src = posterURL
	cardImage.alt = title

	const cardTitle = document.createElement('h3')
	cardTitle.classList.add('card__title')
	cardTitle.textContent = title

	card.append(cardImage, cardTitle)

	return card
}

// Métodos de string
// const arr = str.split(separator)
// Métodos de array
// array.forEach(callback)
// array.filter(callback)
// array.includes(item)

/*

<article class="card">
		<img class="card__image"
			src="https://image.tmdb.org/t/p/w200/qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg"
			alt="Sound of freedom"
		/>
		<h3 class="card__title">Sound of Freedom</h3>
</article>

*/

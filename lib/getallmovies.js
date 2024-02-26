// Api calling
const fetch = require('node-fetch');

export default async function getAllMovies() {

    const url = 'https://api.themoviedb.org/3/account/21019068/rated/movies?language=en-US&page=1&sort_by=created_at.asc';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NWQ3ZmMzNzhlZGQ1YWNmOTgwZGMwODdlNDkwMzFhYyIsInN1YiI6IjY1ZDNjNjQwZGYyOTQ1MDE4NjdjNTExYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BFJyTnv_wiAi3Pg_2doaBz6tR8Y3mku6x_rheDy-ZCM'
        }
    };

    const res = await fetch(url, options)

   
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')

    }
   
    return res.json()
  }
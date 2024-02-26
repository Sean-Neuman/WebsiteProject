import React from 'react';
import { CardWrapper, CardImage, CardTitle, CardDescription, CardRating } from './styles/card.styled';


export default function Card({ movie }) {

    return (
        <CardWrapper>
            <CardImage src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <div>
                <CardTitle>{movie.title}</CardTitle>
                <CardDescription>{movie.overview}</CardDescription>
                <CardRating> Rating: {movie.rating} </CardRating>
            </div>

        </CardWrapper>
    )
}

import React from 'react';
import { CardWrapper, CardImage, CardTitle, CardDescription, CardRating, CardNum } from './styles/gitCard.styled';


export default function GitCard({ data }) {

    return (
        <CardWrapper  >

            <CardTitle>Number of Git Repos</CardTitle>
            <CardNum> {data.public_repos} </CardNum>
           
        </CardWrapper>
    )
}

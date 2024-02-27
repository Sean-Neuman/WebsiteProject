import styled from 'styled-components';


export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    padding: 20px;
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 10px ;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: 0.2s ease-in-out;
    margin: 15px;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }
    `;

export const CardImage = styled.img`   
    border-radius: 10px;
    height: 200px;
    width: 150px;
    margin: 20px;
    position: relative;


    `;
export const CardTitle = styled.h2`
    margin: 20px 0;
    text-align: center;
    font-size: 1.5em;
    border : 1px solid ${({ theme }) => theme.colors.secondary};
    `;
export const CardDescription = styled.p`
    text-align: center;
    font-size : .9em;
    `;
export const CardRating = styled.p`
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    text-align: right;
    font-size: .9em;
    `;
export const CardNum = styled.p`
    text-align: center;
    font-size: 9em;
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    `;

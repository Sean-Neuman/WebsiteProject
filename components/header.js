import { StyledHeader } from './styles/header.styled';
import {StyledNavbar} from './styles/Navbar.styled';
import {StyledButton} from './styles/button.styled';

export default function Header() {
    return (
        <StyledHeader>
            
            <StyledNavbar>
                <ul>
                    <StyledButton>
                        <a href="/"><span>Home</span></a> 
                    </StyledButton>
                    <StyledButton>
                        <a href="../pages/movies.js"><span>Movies</span></a> 
                    </StyledButton><StyledButton>
                        <a href="#"><span>Portfolio</span></a> 
                    </StyledButton>
                </ul>
            </StyledNavbar>
        </StyledHeader>
        
    )
}
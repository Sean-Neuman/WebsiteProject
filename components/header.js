import { StyledHeader } from "./styles/header.styled";
import { StyledNavbar } from "./styles/Navbar.styled";
import { StyledButton } from "./styles/button.styled";
import Link from "next/link";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNavbar>
        <ul>
          <StyledButton>
            <Link href="/">
              <span>Home</span>
            </Link>
          </StyledButton>
          <StyledButton>
            <Link href="/movie">
              <span>Movies</span>
            </Link>
          </StyledButton>
          <StyledButton>
            <Link href="/portfolio">
              <span>Portfolio</span>
            </Link>
          </StyledButton>
        </ul>
      </StyledNavbar>
    </StyledHeader>
  );
}

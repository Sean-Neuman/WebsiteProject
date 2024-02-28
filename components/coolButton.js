import { StyledButton } from "./styles/button.styled";

export default function CoolButton({ text }) {
  return (
    <StyledButton>
        <span>{text}</span>
    </StyledButton>
  );
}

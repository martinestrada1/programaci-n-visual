import styled from "styled-components";
const StyledSubtitle = styled.span`
  font-size: 10;
  color: ${props => props.color};
`;

function Subtitle({ text, color }) {
  return (
    <div>
      <StyledSubtitle color={color}>{text}</StyledSubtitle>
    </div>
  );
}

export default Subtitle;
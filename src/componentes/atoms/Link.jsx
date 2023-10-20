import styled from "styled-components";
const StyledLink = styled.a`
    font-size: 10;
    color: white;
`;

function Link({text, link}) {
    return ( 
        <StyledLink href={link} target="_blank">{text}</StyledLink>
     );
}

export default Link;
import styled from "styled-components";
const StyledTitle = styled.span`
    font-size: 12;
    color: white;
`;

function Title({text}) {
    return ( 
        <div>
            <StyledTitle>{text}</StyledTitle>
        </div>
     );
}

export default Title;
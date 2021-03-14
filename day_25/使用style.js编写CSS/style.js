import styled from 'styled-components'
const HomeWrapper = styled.div`
font-size : 90px;
color: red;
.banner {
    background-color: blue;
}
h2 {
    &.active {
        color: black;
    }
    &:hover {
        color:green;
    }
    &::after {
        content: "aaa"
    }
}
color: {props => props.theme.themeColor};
`
export default HomeWrapper
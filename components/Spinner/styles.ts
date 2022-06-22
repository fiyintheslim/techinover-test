import styled from "styled-components"

const Spinner = styled.div`
    position: relative;
    margin: 0 auto;
    &:after{
        content: "";
        width:${0.063 * 17}rem;
        height: ${0.063 * 17}rem;
        border: ${0.063 * 3}rem solid #dddddd;
        border-top-color: #009579;
        border-radius: 50%;
        position: absolute;
        right:0;
        left: 0;
        bottom:0;
        top:0;
        margin: auto;
        animation: spin 1s ease infinite;
    }
    

    @keyframes spin {

        to{
            transform: rotate(1turn)
        }
    }
`

export default Spinner
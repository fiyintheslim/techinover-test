import styled, {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    body{
        font-family: 'Inter', sans-serif;
        
    }
`
export const FormContainer = styled.main`
    margin: auto;
    width: 100%;
    height: 100vh;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (min-width: 768px){
        width: ${0.063 * 528}rem;
    }
`
export const Form = styled.form`
    width: 100%;
`
export const FormHeading = styled.h1`
    width: 100%;
    font-size: ${0.063 * 33}rem;
    line-height: ${0.063 * 43}rem;
    margin-bottom: ${0.063 * 28}rem;
    font-weight: 700;
    color: #101828;

    @media only screen and (min-width: 768px){
        font-size: ${0.063 * 44}rem;
        line-height: ${0.063 * 53}rem;
        margin-bottom: ${0.063 * 48}rem;
    }
`
export const Button = styled.button`
    color: #fff;
    background: #7D5FFF;
    width: 100%;
    border-radius: ${0.063 * 6}rem;
    height: ${0.063 * 57}rem;
    font-size: ${0.063 * 17}rem;
    line-height: ${0.063 * 21}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    cursor: pointer;
    &:hover{
        background: #b4a4fc;
        color: #000000;
    }
`   

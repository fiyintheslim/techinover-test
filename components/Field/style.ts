import styled from "styled-components"

export const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-bottom: ${0.063 * 25}rem;
    @media only screen and (min-width: 768px){
        margin-bottom: ${0.063 * 39}rem;
    }
`

export const Label = styled.label`
    margin-bottom: ${0.063 * 12}rem;
    font-size: ${0.063 * 14}rem;
    line-height: ${0.063 * 17}rem;
    font-weight: 400;
    color: #667085;
`

export const Input = styled.input`
    font-size: ${0.063 * 12}rem;
    border-radius: ${0.063 * 7}rem;
    width: 100%;
    height: ${0.063 * 52}rem;
    padding: ${0.063 * 18}rem ${0.063 * 20}rem;
    border: solid ${0.063 * 1}rem #EAECED;
    background: #F3F4F5;
    outline: none;
    font-size: ${0.063 * 12}rem;
    font-weight: 400;

`
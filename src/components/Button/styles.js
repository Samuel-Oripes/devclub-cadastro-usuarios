import styled from "styled-components";

export const Button = styled.button`
    border: ${props =>
        props.theme === 'primary'
            ? 'none'
            : 'solid 1px #ffff'};

    background: ${props =>
        props.theme === 'primary'
            ? 'linear-gradient(180deg, #FE7E5D 0%, #FF6378 100%)'
            : 'transparent'};

    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;
    border-radius: 30px;

    &:hover {
        ${props =>
            props.theme === 'primary'
            ? 'opacity: 0.8'
            : 'opacity: 0.8; background-color: #777'}
    }

    &:active {
        opacity: 0.5;
    }
`
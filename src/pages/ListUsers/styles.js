import styled from "styled-components";

export const Container = styled.div`
    background-color: #181F36;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 20px;
    gap: 50px;
`

export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;

    @media (max-width: 750px){
        grid-template-columns: 1fr;
    }
`

export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 400px;

    h3{
        color: #ffff;
        font-size: 24px;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #ffff;
        font-size: 14px;
        font-weight: 200;
        max-width: 150px;
        overflow-x: auto;
        white-space: nowrap;
        padding-bottom: 3px;

        &::-webkit-scrollbar{
            height: 8px;
            background-color: #fff0ff80;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb{
            background-color: #d2d2d2;
            border-radius: 5px;
        }

        &::-webkit-scrollbar-thumb:hover{
            background-color: #fff;
        }
    }
`

export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const AvatarUser = styled.img`
    height: 80px;
`

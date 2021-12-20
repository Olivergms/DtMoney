import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    /* 3 colunas com um tamanho flexivel */
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    margin-top:  -10rem;

    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            /* Por padrão, strong vem inline, sendo assim o margin top não funciona */
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        /* A div que está com a class ... */
        &.highlight-background{
            background: var(--green);
            color: #FFF;
        }
    }
`;
import styled from 'styled-components';

export const Wrapper = styled.div`
    flex: 1;
    padding: 0 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Main = styled.main`
    padding: 5rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h1`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;

    a {
        color: #0070f3;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }
`;

export const Description = styled.p`
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;

    code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    }
`;

export const CardList = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;
    margin-top: 3rem;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`;

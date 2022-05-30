import styled from 'styled-components';

export const Container = styled.div`
    background-color: #307ab7;
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.div`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background-color: #4F91C7;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #307ab7;
        border: 0;
        color: white;
        padding: 8px 16px;
        font-size: 15px;
        font-family: 'Roboto', Helvetica, sans-serif;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transition: background-color: 0.2s;

        &:hover {
            background-color: #3276AE;
        }
    }

    input[type='file'] {
        cursor: pointer;
        background-color: #307ab7;
        border: 0;
        color: white;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        transition: background-color: 0.2s;

        &:hover {
            background-color: #3276AE;
        }
    }
`;


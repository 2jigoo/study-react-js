import styled, { ThemeProvider, css } from 'styled-components'

import './App.css'
import Button from './components/Button';
import Dialog from './components/Dialog';
import { useState } from 'react';

/* const Circle = styled.div`
    width: 5rem;
    height: 5rem;
    background: #2562f2;
    border-radius: 50%;
    ${props =>
        props.huge &&
        css`
          width: 10rem;
          height: 10rem;
        `}
` */

const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid #393939;
    padding: 1rem;
`

const ButtonGroup = styled.div`
    &:not(:first-child) {
        margin-top: 1rem;
    }
`


function App() {
    const [dialog, setDialog] = useState(false);

    const onClick = () => {
        setDialog(true);
    }
    
    const onConfirm = () => {
        setDialog(false);
    }
    
    const onCancel = () => {
        setDialog(false);
    }

    return (
        <ThemeProvider
            theme={{
                palette: {
                blue: '#228be6',
                gray: '#495057',
                pink: '#f06595'
                }
            }}
        >
            <AppBlock>
                <ButtonGroup>
                    <Button size="large">BUTTON</Button>
                    <Button>BUTTON</Button>
                    <Button size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="gray" size="large">BUTTON</Button>
                    <Button color="gray">BUTTON</Button>
                    <Button color="gray" size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button color="pink" size="large">BUTTON</Button>
                    <Button color="pink">BUTTON</Button>
                    <Button color="pink" size="small">BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" outline>BUTTON</Button>
                    <Button outline>BUTTON</Button>
                    <Button size="small" outline>BUTTON</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button size="large" fullWidth>BUTTON</Button>
                    <Button size="large" color="gray" fullWidth>BUTTON</Button>
                    <Button size="large" color="pink" fullWidth onClick={onClick}>삭제</Button>
                </ButtonGroup>
            </AppBlock>
            <Dialog
                title="정말로 삭제하시겠습니까?"
                confirmText="삭제"
                cancelText="취소"
                visible={dialog}
                onConfirm={onConfirm}
                onCancel={onCancel}
            >
                데이터를 정말로 삭제하시겠습니까?
            </Dialog>
        </ThemeProvider>
    )
}

export default App

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainContainer } from './components/containers/Main';
import TodoForm from './components/TodoForm';
import { BooksContextProvider } from "./context";

const books = [{ id: 1, name: "John" }, { id: 2, name: "Joanna" }];

ReactDOM.render(
    <>
        <BooksContextProvider books={books}> 
            <MainContainer>
                <TodoForm />
            </MainContainer>
        </BooksContextProvider>
    </>
    ,
    document.querySelector('#root') 
)   
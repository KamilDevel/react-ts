import * as React from 'react';
import { useState, useContext } from 'react';

import { BooksContext } from '../../../context';

const container = (props: any) => {
    const booksContext = useContext(BooksContext);
    console.log(booksContext);


    return(
        <div>
            {props.children}
        </div>
    )
};

export { 
    container as MainContainer 
};
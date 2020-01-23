import * as React from "react";
import * as PropTypes from "prop-types";
import { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = (props: any) => {
    const {
        books: initialBooks,
        children
    } = props;

    const [books, setBooks] = useState(initialBooks);

    const booksContext = {
        books,
        setBooks
    };

    return <Context.Provider value={booksContext}>{children}</Context.Provider>;
}

export const { Consumer } = Context;
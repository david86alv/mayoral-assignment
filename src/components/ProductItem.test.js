import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import { ProductItem } from "./ProductItem";

test('', () => {
    const product = {
        id: 10,
        name: 'This is a test',
        price: 9.99
    }

    const component = render(<ProductItem product={product} />)

    console.log(component)
})
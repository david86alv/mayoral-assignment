import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductItem } from "./ProductItem";

const productTest = { id: 0, name: 'camisa', price: 20, salePrice: 18, discount: 10, image: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' };

test('Name Test', () => {
    render(<ProductItem product={productTest} />);
    const name = screen.getAllByText(productTest.name);
    expect(name).toHaveLength(2);
});

test('Add cart Test', () => {
    const productItem = render(<ProductItem product={productTest} />);
    const button = productItem.container.querySelector('button');
    screen.getByText('AÑADIR');
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
});

test('Image Test', () => {
    const onError = jest.fn();
    const productItem = render(<ProductItem product={productTest} />);
    const image = productItem.container.querySelector('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', productTest.image);
});

test('No image Test', () => {
    const onError = jest.fn();
    const productItem = render(<ProductItem product={productTest} />);
    const image = productItem.container.querySelector('img');
    fireEvent.load(image);
    fireEvent.error(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/images/no_image_web.png');
});
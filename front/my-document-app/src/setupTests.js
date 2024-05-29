// setupTests.js
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

// Add root element to document body
const rootElement = document.createElement('div');
rootElement.setAttribute('id', 'root');
document.body.appendChild(rootElement);

// Add custom render function to render components
const customRender = (ui, options) =>
    render(ui, { container: rootElement, ...options });

export * from '@testing-library/react';
export { customRender as render };

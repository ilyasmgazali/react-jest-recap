import { toHaveClass, toHaveAttribute } from "@testing-library/jest-dom/dist/matchers";
import { getByTestId, render, screen, fireEvent } from "@testing-library/react";
import Button from "../button";


describe('Button', ()=>{
    beforeEach(()=>{
        render(<Button label='Click me now!'/>)
    })

    it('should return a button', () => {
        const button = screen.getByTestId('button-toggle');
        expect(button).toBeTruthy();
    });
    it('should return attribute of type', () => {
        const button = screen.getByTestId('button-toggle')
        expect(button).toHaveAttribute('type', 'button')
    });
    it('should have a className', () => {
        expect(screen.getByTestId('button-toggle')).toHaveClass('button-style')

    });
    it('has correct label', () => {
        expect(screen.getByTestId('button-toggle')).toHaveTextContent('Click me now!')
    } );
    it('has click me on page by default', () => {
        expect(screen.getByTestId('click-me')).toBeTruthy()
    });
    it('does not has click me on page by default', () => {
        expect(screen.queryByTestId('you-click-me')).toBeFalsy()
    });
    it('has you clicked me when clicked', ()=>{
        fireEvent.click(screen.getByTestId('button-toggle'))
        expect(screen.getByTestId('you-clicked-me')).toBeTruthy()
        expect(screen.queryByTestId('click-me')).toBeFalsy()
    })
    it('has you clicked me when clicked, twice', ()=>{
        fireEvent.click(screen.getByTestId('button-toggle'))
        fireEvent.click(screen.getByTestId('button-toggle'))
        expect(screen.getByTestId('click-me')).toBeTruthy() //?
        expect(screen.queryByTestId('you-clicked-me')).toBeFalsy() //?
    })
    it('takes a snapshot',()=>{
        const {asFragment} = render(<Button label='Click me now!'/>)
        expect(asFragment()).toMatchSnapshot()
    })
})
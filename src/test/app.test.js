import React from "react";
import { mount, configure } from "enzyme";
import App from "../App";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { Provider } from "react-redux";
import { createStore } from "redux";
configure({ adapter: new Adapter() });

describe("App", () => {
    it("Interactua con el strore", () => { 
        const prevent = jest.fn();
        const reducer = jest.fn().mockReturnValue({
            finanzas: [{ desc: "Finanza 1", cant: 150 }]
        });

        const store = createStore(reducer);
        const wrapper = mount(
            <Provider store={store}>
                <App />
            </Provider>
        );

        wrapper.find('input').at(0).simulate('change', {target: {value: "Finanza 2"}});
        wrapper.find('input').at(1).simulate('change', {target: {value: 200}});
        wrapper.find('form').simulate('submit', {preventDefault: prevent});
        wrapper.find('button').at(2).simulate('click');
        const [a, ...rest] = reducer.mock.calls;
        expect(rest).toEqual([
            [
                { finanzas: [{ desc: "Finanza 1", cant: 150 }]}, 
                {type: 'AGREGAR', payload: { desc: "Finanza 2", cant: 200 }}
            ],
            [
                { finanzas: [{ desc: "Finanza 1", cant: 150 }]}, 
                {type: 'ELIMINAR', index: 0}
            ]
        ]);

        expect(wrapper.text().includes("Finanza 1")).toEqual(true);
        expect(wrapper.text().includes("Finanzly")).toEqual(true);
    })
})
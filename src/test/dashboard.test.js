import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Dashboard from "../components/Dashboard";
configure({ adapter: new Adapter() });
describe("Dashboard", () => {
    it("Muestra valor ", () => {
        const wrapper = shallow(<Dashboard valor={1000}/>);
        const resultado = wrapper
            .text()
            .includes("1000");

        expect(resultado).toBe(true);
    })
})
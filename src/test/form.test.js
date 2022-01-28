import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Form from "../components/Form";
configure({ adapter: new Adapter() });
describe("Formulario", () => {
    it("Agrega finanza", () => {
        const agregreFinanza = jest.fn();
        const preventDefault = jest.fn();

        const wrapper = shallow(<Form agregarFinanza={agregreFinanza} />);

        wrapper
            .find("input")
            .at(0)
            .simulate("change", {target: {value: "Descripción"}});

        wrapper
            .find("input")
            .at(1)
            .simulate("change", {target: {value: "150"}});

        wrapper
            .find("form")
            .simulate("submit", { preventDefault });


        expect(agregreFinanza.mock.calls).toEqual([[{ desc: "Descripción", cant: 150 }]]);
        expect(preventDefault.mock.calls).toEqual([[]]);
    })
})
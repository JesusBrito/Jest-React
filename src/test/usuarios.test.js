import { fetchUsuarios } from "../reducers/usuarios";

describe('Duck usuarios', () => {
    describe('fetchUsuarios', () => {          
        it("maneja el caso de exito", async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            const services = {
                axios: {
                    get: jest.fn().mockResolvedValue({data: [{id: 1, name: 'Juan'}]})
                }
            }
            await fetchUsuarios()(dispatch, getState, services)

            expect(dispatch.mock.calls ).toEqual([
                [{type: 'FETCH_USUARIOS_START', error: false}],
                [{type: 'FETCH_USUARIOS_SUCCESS', payload: [{id: 1, name: 'Juan'}]}]
            ])
        })

        it("maneja el caso de error", async () => {
            const dispatch = jest.fn();
            const getState = jest.fn();
            const services = {
                axios: {
                    get: jest.fn().mockRejectedValue({message: 'Error'})
                }
            }
            await fetchUsuarios()(dispatch, getState, services)

            expect(dispatch.mock.calls ).toEqual([
                [{type: 'FETCH_USUARIOS_START', error: false}],
                [{type: 'FETCH_USUARIOS_ERROR', payload: {message: 'Error'}, error: true}]
            ])
        })
    });
});

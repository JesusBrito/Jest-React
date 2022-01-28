import reducer, {agregar, eliminar} from '../reducers/finanzas.js';

describe('Finanzas Ducks', () => {
    describe('Acttion creators', () => {
        it('agregar', () => {
            const resultado = agregar(1)
            expect(resultado).toEqual({type: 'AGREGAR', payload: 1});
        });

        it('eliminar', () => {
            const resultado = eliminar(1)
            expect(resultado).toEqual({type: 'ELIMINAR', index: 1});
        });
    })

    describe('Reducer', () => {
        it("Agregar", () => {
            const resultado = reducer([1], 
                {
                    type: 'AGREGAR', 
                    payload: 2
                }
            );
            expect(resultado).toEqual([1, 2]);
        })

        it("Eliminar", () => {
            const resultado = reducer([1, 2, 3],
                {
                    type: 'ELIMINAR', 
                    index: 0
                }
            );
            expect(resultado).toEqual([2, 3]);
        })

        it("Default", () => {
            const resultado = reducer([1, 2, 3],
                {
                    type: 'NADA_EN_MI_REDUCER', 
                    index: 0
                }
            );
            expect(resultado).toEqual([1, 2, 3]);
        })
    })
})

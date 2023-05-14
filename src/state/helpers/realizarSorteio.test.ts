import { realizarSorteio } from "./realizarSorteio"

describe('dado um sorteio de amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Ana', 
            'Catarina',
            'Juliana', 
            'João',
            'Vinicios',
            'Nathália'
        ]

        const sorteio = realizarSorteio(participantes)
        participantes.forEach(partipante => {
            const amigoSecreto = sorteio.get(partipante)
            expect(amigoSecreto).not.toEqual(partipante)
        })
    })
})
import { UniqueServiceId } from './unique-id.service';

let service = new UniqueServiceId();

// nome do component testado
describe(UniqueServiceId.name, () => {

    //*********************** estancie uma estancia do serviço para testar os metodos dentro do serviço */
    // exemplo: 'const service = new UniqueServiceId (nome do component'

    // variavel que é chamada antes de todos os testes (it). Isso evita de chamar o mesmo serviço em todos os testes
    beforeAll(() => {
        service = new UniqueServiceId();

    });

    // ambos 'it' fazem a mesma coisa;
    it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-')
    });

    // porem esse 'it' pega dinamicamente o nome da classe, o mesmo ocorree no 'describe'
    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}
        should generate id when called with prefix`, () => {
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app')).toBeTruthy(); // se 'id' começar ocm 'app', o metodo retorna true e valida o test
    });


    // testa para que o 'firstId', não sejá igual ao 'secondId'
    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} 
        should not generate id duplicated when called multiple times`, () => {
        const firstId = service.generateUniqueIdWithPrefix('app');
        const secondId = service.generateUniqueIdWithPrefix('app');
        expect((firstId)).not.toBe(secondId);
    });
    // faz a mesma coisa que o de cima mas diferente 
    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}
        should not generate id duplicated when called multiple times`, () => {
        const service = new UniqueServiceId();
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'))
        }
        expect(ids.size).toBe(50);
    });

    it(`${UniqueServiceId.prototype.getNumberOfGenerateUniqueIds.name} 
        should to return a number`, () => {
        const service = new UniqueServiceId();
        service.generateUniqueIdWithPrefix('app');
        service.generateUniqueIdWithPrefix('app');
        expect(service.getNumberOfGenerateUniqueIds()).toBe(2)
    })

    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name}
        should throw when value is empty` , () => {

        const emptyValues = ['', undefined, null];

        // utilizando um contexto (withContext) que só funciona dentro do 'For'
        // para revelar qual var dentro do array que está causando o erro do teste
        emptyValues.forEach(empty => {
            expect(() => service.generateUniqueIdWithPrefix(empty))
                .withContext(`Empry value ${emptyValues}`).toThrow();
        });
    });

});
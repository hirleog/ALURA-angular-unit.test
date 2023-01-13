import { UniqueServiceId } from './unique-id.service';

// nome do component testado
describe(UniqueServiceId.name, () => {

    //*********************** estancie uma estancia do serviço para testar os metodos dentro do serviço */
                                        // exemplo: 'const service = new UniqueServiceId (nome do component'


    // ambos 'it' fazem a mesma coisa;
    it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
        const service = new UniqueServiceId();
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-')
    });

    // porem esse 'it' pega dinamicamente o nome da classe, o mesmo ocorree no 'describe'
    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service = new UniqueServiceId();
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id.startsWith('app')).toBeTruthy(); // se 'id' começar ocm 'app', o metodo retorna true e valida o test
    });


    // testa para que o 'firstId', não sejá igual ao 'secondId'
    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should not generate id duplicated when called multiple times`, () => {
        const service = new UniqueServiceId();
        const firstId = service.generateUniqueIdWithPrefix('app');
        const secondId = service.generateUniqueIdWithPrefix('app');
        expect((firstId)).not.toBe(secondId);
    });
    // faz a mesma coisa que o de cima mas diferente 
    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should not generate id duplicated when called multiple times`, () => {
        const service = new UniqueServiceId();
        const ids = new Set();
        for (let i = 0; i < 50; i++) {
        ids.add(service.generateUniqueIdWithPrefix('app'))
        }
        expect(ids.size).toBe(50);
    });
});
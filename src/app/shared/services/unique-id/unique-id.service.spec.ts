import { UniqueServiceId } from './unique-id.service';

// nome do component testado
describe(UniqueServiceId.name, () => {


    // ambos 'it' fazem a mesma coisa;
    it('#generateUniqueIdWithPrefix should generate id when called with prefix', () => {
        const service = new UniqueServiceId();
        const id = service.generateUniqueIdWithPrefix('app');
        expect(id).toContain('app-')
    });

    // porem esse 'it' pega dinamicamente o nome da classe, o mesmo ocorree no 'describe'
    it(`${UniqueServiceId.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
        const service = new UniqueServiceId();
        const id = 'app-duashdaushdhasudha-app-dasdad;';
        expect(id.startsWith('app')).toBeTruthy(); // se 'id' começar ocm 'app', o metodo retorna true e valida o test
    });
});
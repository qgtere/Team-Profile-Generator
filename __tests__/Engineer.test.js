const Engineer = require('../lib/engineer');

describe('engineer', () => {
    it('test if we can get the Engineer role', () => {
        const value = 'Engineer';
        const emp = new Engineer('Tere Quintero', '123', 'qg.tere@gmail.com', 'qgtere');
        expect(emp.getRole()).toBe(value);
    });

    it('test if we can get the engineer gitHub user', () => {
        const value = 'qgtere';
        const emp = new Engineer('Tere Quintero', '123', 'qg.tere@gmail.com', value);
        expect(emp.getGithub()).toBe(value);
    });
});
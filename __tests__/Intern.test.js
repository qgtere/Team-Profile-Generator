const Intern = require('../lib/intern');

describe('intern', () => {
    it('test if we get the intern role', () => {
        const value = 'Intern';
        const emp = new Intern('Tere Quintero', '123', 'qg.tere@gmail.com');
        expect(emp.getRole()).toBe(value);
    });

    it('test if we can get the Intern\'s school', () => {
        const value = 'ITLP';
        const emp = new Intern('Tere Quintero', '123', 'qg.tere@gmail.com', value);
        expect(emp.getSchool()).toBe(value);
    });
});
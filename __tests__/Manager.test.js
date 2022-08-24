const Manager = require('../lib/manager');

describe('manager', () => {
    it('test if we can get the Manager role', () => {
        const value = 'Manager';
        const emp = new Manager('Tere Quintero', '123', 'qg.tere@gmail.com', 'A01');
        expect(emp.getRole()).toBe(value);
    });

    it('test if we can get the manager\'s office number', () => {
        const value = 'A01';
        const emp = new Manager('Tere Quintero', '123', 'qg.tere@gmail.com', value);
        expect(emp.getOffice()).toBe(value);
    });
});
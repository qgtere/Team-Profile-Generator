
const Employee = require('../lib/employee');

describe('employee', () => {
    it('test if we can get the employee name', () => {
        const value = 'Tere Quintero';
        const emp = new Employee(value, '123', 'qg.tere@gmail.com');
        expect(emp.getName()).toBe(value);
    });

    it('test if we can get the employee ID', () => {
        const value = '123';
        const emp = new Employee('Tere Quintero', value, 'qg.tere@gmail.com');
        expect(emp.getID()).toBe(value);
    });

    it('test if we can get the employee email', () => {
        const value = 'qg.tere@gmail.com';
        const emp = new Employee('Tere Quintero', '123', value);
        expect(emp.getEmail()).toBe(value);
    });

    it('test if we can get the employee role', () => {
        const value = 'Employee';
        const emp = new Employee('Tere Quintero', '123', 'qg.tere@gmail.com');
        expect(emp.getRole()).toBe(value);
    });
});


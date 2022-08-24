const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name, employeeID, email, gitHub) {
        super(name, employeeID, email);
        this.gitHub = gitHub;
    }

    getGithub() {
        return this.gitHub;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
function startHtml() {
    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='utf-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <title>Team Profile Generator</title>
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
        <link rel='stylesheet' type='text/css' media='screen' href='style.css'>
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>
            <div class="container">  
    `;

};

function managerHtml(employee) {   
    return `
            <div class="card m-3 shadowCard" style="width: 18rem;">
                <div class="card-header manager">
                    ${employee.name}<br>Manager
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.employeeID}</li>
                    <li class="list-group-item">E-mail:<a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office number: ${employee.officeNumber}</li>
                </ul>
            </div>    
    `;
};

function engineerHtml(employee) {
    return `
            <div class="card m-3 shadowCard" style="width: 18rem;">
                <div class="card-header engineer">
                    ${employee.name}<br>Engineer
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.employeeID}</li>
                    <li class="list-group-item">E-mail:<a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">GitHub:<a target="_blank" href="https://github.com/${employee.gitHub}">${employee.gitHub}</a></li>
                </ul>
            </div>    
    `;

};

function internHtml(employee) {
    return `
            <div class="card m-3 shadowCard" style="width: 18rem;">
                <div class="card-header intern">
                    ${employee.name}<br>Intern
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.employeeID}</li>
                    <li class="list-group-item">E-mail:<a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.school}</li>
                </ul>
            </div>    
    `;

};

function finishHtml() {
    return `
            </div>
        </main>    
    </body>
    </html>    
    `
};

// return the html content
function generateHTML(data) {
    let content= '';
    content = startHtml();

    const resManager = data.filter((emp) => {return emp.getRole() === 'Manager'});
    resManager.forEach(emp => content += managerHtml(emp));

    const resEngineer = data.filter((emp) => {return emp.getRole() === 'Engineer'})
    resEngineer.forEach(emp => content += engineerHtml(emp));    

    const resIntern = data.filter((emp) => {return emp.getRole() === 'Intern'});
    resIntern.forEach(emp => content += internHtml(emp));

    content += finishHtml();
    return content;
};


module.exports = generateHTML;

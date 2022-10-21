
const restApi = `http://localhost:8082/emp`;

const getAllEmps = () => {
    console.log(`getAllEmps`);
    fetch(`${restApi}/get-all-emps`)
        .then(data => data.json())
        .then((json) => {
            console.log(json);
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empList").innerHTML = response;
        })
        .catch(() => {
            document.getElementById("empList").innerHTML = 'Something is wrong!';
        });
}

const addEmp = () => {
    console.log(`addEmp`);
    fetch(`${restApi}/add-emp`, {
        body: JSON.stringify({
            firstName: document.getElementById("firstName").value,
            salary: document.getElementById("salary").value,
            department: {
                departmentId: document.getElementById("departmentId").value
            }
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empAdded").innerHTML = response;
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        })
        .catch(() => {
            document.getElementById("empAdded").innerHTML = 'Something is wrong!';
            document.getElementById("firstName").value = '';
            document.getElementById("salary").value = '';
            document.getElementById("departmentId").value = '';
        });
}

const getEmpById = () => {
    console.log(`getEmpById`);
    let id = document.getElementById("empId").value;
    fetch(`${restApi}/get-emp-by-id/`+id)
        .then(data => data.json())
        .then((json) => {
           
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empFound").innerHTML = response;
           
        })
        .catch(() => {
            document.getElementById("empFound").innerHTML = 'Something is wrong!';
          
        });
}
const getEmpByFname = () => {
    console.log(`getEmpByFname`);
    let name = document.getElementById("fname").value;
    fetch(`${restApi}/get-emp-by-first-name/`+name)
        .then(data => data.json())
        .then((json) => {
           
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empfname").innerHTML = response;
           
        })
        .catch(() => {
            document.getElementById("empfname").innerHTML = 'Something is wrong!';
          
        });
}
const getEmpByCity = () => {
    console.log(`getEmpByCity`);
    let a = document.getElementById("city").value;
    fetch(`${restApi}/get-emp-by-city/`+ a)
        .then(data => data.json())
        .then((json) => {
           
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empcity").innerHTML = response;
           
        })
        .catch(() => {
            document.getElementById("empcity").innerHTML = 'Something is wrong!';
          
        });
}
const getEmpBySalary = () => {
    console.log(`getEmpBySalary`);
    let id = document.getElementById("gsalary").value;
    fetch(`${restApi}/get-emp-by-salary-greater-than/`+id)
        .then(data => data.json())
        .then((json) => {
           
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empsalary").innerHTML = response;
           
        })
        .catch(() => {
            document.getElementById("empsalary").innerHTML = 'Something is wrong!';
          
        });
}
const updateEmp = () => {
    console.log(`updateEmp`);
    fetch(`${restApi}/update-emp`, {
        body: JSON.stringify({
            employeeId:document.getElementById("Id").value,
            firstName: document.getElementById("Name").value,
            salary: document.getElementById("salary1").value,
            department: {
                departmentId: document.getElementById("deptId").value,
                departmentName: document.getElementById("departmentName").value,
                city: document.getElementById("city1").value
            }
            
        }),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("empUpdated").innerHTML = response;
            document.getElementById("Id").value = '';
            document.getElementById("Name").value = '';
            document.getElementById("salary1").value = '';
            document.getElementById("deptId").value = '';
            document.getElementById("departmentName").value = '';
            document.getElementById("city1").value = '';
        })
        .catch(() => {
            document.getElementById("empUpdated").innerHTML = 'Something is wrong!';
            document.getElementById("Id").value = '';
            document.getElementById("Name").value = '';
            document.getElementById("salary1").value = '';
            document.getElementById("deptId").value = '';
            document.getElementById("departmentName").value = '';
            document.getElementById("city1").value = '';
        });
}
const deleteEmpById = () => {
    console.log(`deleteEmpById`);
    let id = document.getElementById("Id1").value;
    fetch(`${restApi}/delete-emp-by-id/`+id,{
    body: JSON.stringify({
        employeeId:document.getElementById("Id").value
    }),
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
document.getElementById("empdelete").innerHTML = 'Employee Deleted';

}




const restApi1 = `http://localhost:8082/dep`;
const getDepById = () => {
    console.log(`getDepById`);
    let id = document.getElementById("depId").value;
    fetch(`${restApi1}/get-dept-by-did/`+id)
        .then(data => data.json())
        .then((json) => {
           
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("depFound").innerHTML = response;
           
        })
        .catch(() => {
            document.getElementById("depFound").innerHTML = 'Something is wrong!';
          
        });
}

const addDep = () => {
    console.log(`addDep`);
    fetch(`${restApi1}/add-dept`, {
        body: JSON.stringify({
            departmentId : document.getElementById("did").value,
            departmentName : document.getElementById("dname").value,
            city : document.getElementById("dcity").value
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("depAdded").innerHTML = response;
            document.getElementById("did").value = '';
            document.getElementById("dname").value = '';
            document.getElementById("dcity").value = '';
        })
        .catch(() => {
            document.getElementById("depAdded").innerHTML = 'Something is wrong!';
            document.getElementById("did").value = '';
            document.getElementById("dname").value = '';
            document.getElementById("dcity").value = '';
        });
}
const updateDep = () => {
    console.log(`updateDep`);
    fetch(`${restApi1}/update-dept`, {
        body: JSON.stringify({
            departmentId : document.getElementById("did1").value,
            departmentName : document.getElementById("dname1").value,
            city : document.getElementById("dcity1").value
           
            
        }),
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(data => data.json())
        .then((json) => {
            response = JSON.stringify(json);
            console.log(response);
            document.getElementById("depUpdated").innerHTML = response;
            document.getElementById("did1").value = '';
            document.getElementById("dname1").value = '';
            document.getElementById("dcity1").value = '';
        })
        .catch(() => {
            document.getElementById("depUpdated").innerHTML = "Something is wrong..!";
            document.getElementById("did1").value = '';
            document.getElementById("dname1").value = '';
            document.getElementById("dcity1").value = '';
        });
}
const deleteDepById = () => {
    console.log(`deleteDepById`);
    let id = document.getElementById("did2").value;
    fetch(`${restApi1}/delete-dept-by-did/`+id,{
    body: JSON.stringify({
        employeeId:document.getElementById("did2").value
    }),
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
document.getElementById("depdelete").innerHTML = 'Department Deleted';

}
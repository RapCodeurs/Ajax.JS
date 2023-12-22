/*const tbody = document.getElementById('tbody'); // élément tbody du tableau
const students = []; // liste des étudiants

// fonction de création de ligne
const createLine = (tbody, student) => {
  const newRow   = tbody.insertRow();
  let counter = 0
  for (const key in student) {
    const newCell  = newRow.insertCell(counter);
    // La Méthode createTextNode() permet de créer un noeud de texte
    const newText  = document.createTextNode(student[key]);
    newCell.appendChild(newText);
    counter++
  }
}

function sendForm() {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function() {
        if(xhr.readyState === 4 && xhr.status === 201){
            const data = JSON.parse(xhr.response);
            console.log(data)
        }
    });

    xhr.open('POST', 'https://reqres.in/api/users');

    let newStudent = new FormData();

    newStudent.append('firsName', 'Marie');
    newStudent.append('lastName', 'Dupond');
    newStudent.append('grade', '6');
    newStudent.append('numberClass', '5');

    xhr.send(newStudent);

    return newStudent
}

if(sendForm()) {
    tbody.innerText()
    students.push(sendForm())

} else {
    alert('error')
}*/


// Correction de l'exercice

const tbody = document.getElementById('tbody');
const students = [];

const createLine = (tbody, student) => {
  const newRow   = tbody.insertRow();
  let counter = 0
  for (const key in student) {
    const newCell  = newRow.insertCell(counter);
    const newText  = document.createTextNode(student[key]);
    newCell.appendChild(newText);
    counter++
  }
}

const sendForm = () => {
    const firstName = document.querySelector('#firstName').value
    const lastName = document.querySelector('#lastName').value
    const grade = document.querySelector('#grade').value
    const numberClass = document.querySelector('#numberClass').value

    const student = {id: '', firstName, lastName, grade, numberClass};
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://reqres.in/api/users');

    xhr.addEventListener('readystatechange', () => {
        if(xhr.readyState === 4) {
            if (xhr.status === 201) {
            const data = JSON.parse(xhr.response);
            student.id = data.id;
            students.push(student);
            createLine(tbody, student);
            } else {
            alert('Erreur')
            }
        }
    });
    
    xhr.send(student);
}





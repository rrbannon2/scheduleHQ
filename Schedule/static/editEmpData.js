document.addEventListener('DOMContentLoaded', loadEmployee());
function loadEmployee() {
    var tablesDiv = document.getElementById('tablesDiv');
    var deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete Employee";
    deleteButton.setAttribute("onclick", "deleteButton()");
    tablesDiv.appendChild(deleteButton);

    fetch('/loadEmployeeInfo?'+ new URLSearchParams({employee: document.getElementById("id_1").value}), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
        
    })
    .then(data => {
        displayEmpData(data);
        
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors here
    });    
};
function deleteButton() {
    document.getElementById('id01').style.display='block';
};

function deleteEmployee() {
    empToDelete = document.getElementById('id_1').value;
    fetch('/deleteEmployee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(empToDelete),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
        
    })
    .then(data => {
        // Handle the response from the Flask server
        console.log(data);
        // Perform actions based on the response
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors here
    });
    document.getElementById('resetButton').click();
    document.getElementById('id01').style.display='none';
};

function skillButton() {
    window.location.href = '/employeeSkillsPage?' + new URLSearchParams({employee: document.getElementById('id_1').value});
};

function displayEmpData(data) {
    var data = data[0];
    cells = ['id_1','first_name_1','last_name_1','role_1','wage_1','short_shift',
        'long_shift', 'min_weekly_hours', 'max_weekly_hours', 'min_days', 'max_days'];
    var availArray;
    for (i in cells) {
        document.getElementById(cells[i]).value = data[i];
    };
    availArray = data[11];
    availabilityCells = ['sunday_1', 'monday_1', 'tuesday_1', 'wednesday_1', 'thursday_1', 'friday_1',
        'saturday_1', 'sunday_2', 'monday_2', 'tuesday_2', 'wednesday_2', 'thursday_2', 'friday_2', 'saturday_2']
    for (i in availabilityCells) {
        document.getElementById(availabilityCells[i]).value = availArray[i];
    };
};

function goToHome(){
    window.location.href = '/';
};

document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
    var basicInfoCells = ['id_1', 'first_name_1', 'last_name_1', 'role_1', 'wage_1', 'short_shift', 'long_shift', 'min_weekly_hours',
        'max_weekly_hours', 'min_days', 'max_days', 'sunday_1', 'monday_1', 'tuesday_1', 'wednesday_1', 'thursday_1', 'friday_1',
        'saturday_1', 'sunday_2', 'monday_2', 'tuesday_2', 'wednesday_2', 'thursday_2', 'friday_2', 'saturday_2'];

    
    var basicJsonDict = {};

    for (let basicCell of basicInfoCells) {
        cell = document.getElementById(basicCell).value;
        if(cell != ''){
            basicJsonDict[basicCell] = cell;
        };
    };
    console.log(basicJsonDict);

    // Send the JSON object to the Flask backend
    fetch('/updateEmployee', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(basicJsonDict),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        return response.json();
        
    })
    .then(data => {
        // Handle the response from the Flask server
        console.log(data);
        // Perform actions based on the response
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        // Handle errors here
    });
});
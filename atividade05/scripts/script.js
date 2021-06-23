class Activity {

    constructor(description, status) {
        this.description = description;
        this.status = status;
    }
}

let activities = [];

function addActivity() {
    let description = document.getElementById('input-add').value;
    activities.push(new Activity(description, false));

}

function clearInput() {
    let description = document.getElementById('input-add');
    description.value = "";
}

function listActivities() {
    let tbody = document.getElementById('tbody');
    tbody.innerText = "";
    activities.forEach(activity => {
        let index = activities.indexOf(activity);
        let tr = tbody.insertRow();
        tr.setAttribute("onclick", "completeActivity(" + index + "), listActivities()")
        activity.status ? tr.classList.add('activityCompleted') : tr.classList.add('activity')
        let td_description = tr.insertCell();
        let td_action = tr.insertCell();

        td_description.innerText = activity.description;


        let imgDelete = document.createElement('img');
        imgDelete.src = '../images/delete.svg';
        imgDelete.setAttribute("onclick", "removeActivity(" + index + "), listActivities()");

        let buttonDelete = document.createElement('Button');
        tr.classList.add('activity');
        buttonDelete.appendChild(imgDelete);
        td_action.appendChild(buttonDelete);
    })
}

function findIndexActivity(value) {
    activities.forEach(activity => { if (activity === value) return activities.indexOf(activity) });
    return -1;
}

function removeActivity(index) {
    if (index >= 0) {
        activities.splice(index, 1);
    }
}


function completeActivity(index) {
    if (index >= 0) {
        activities[index].status = !activities[index].status;
    }
}

function pressEnter() {
    const textbox = document.getElementById("input-add");
    textbox.addEventListener("keypress", function onEvent(event) {
        if (event.key === "Enter") {
            document.getElementById("button-add").click();
        }
    });
}



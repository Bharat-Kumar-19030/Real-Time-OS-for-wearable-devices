const tasks = [
    { name: "time", deadline: 500 },
    { name: "music", deadline: 800 },
    { name: "heartbeat", deadline: 400 },
    { name: "call", deadline: 700 },
    { name: "message", deadline: 600 }
];

function addTask() {
    const taskName = document.getElementById("adminTask").value;
    const taskDeadline = parseInt(document.getElementById("taskDeadline").value);

    const taskIndex = tasks.findIndex(t => t.name === taskName);
    if (taskIndex !== -1) {
        tasks[taskIndex].deadline = taskDeadline;
        alert(`Task '${taskName}' deadline updated to ${taskDeadline}ms.`);
    } else {
        alert("Invalid task selection.");
    }
}

function selectTasks() {
    const checkboxes = document.querySelectorAll('#userTasks input[type="checkbox"]:checked');
    const selectedTasks = Array.from(checkboxes).map(checkbox => checkbox.value);

    const scheduledTasks = selectedTasks.map(task => tasks.find(t => t.name === task));
    scheduledTasks.sort((a, b) => a.deadline - b.deadline);

    displayProcesses(scheduledTasks);
}

function displayProcesses(processes) {
    const ongoingList = document.getElementById("ongoing-list");
    const queuedList = document.getElementById("queued-list");

    ongoingList.innerHTML = "";
    queuedList.innerHTML = "";

    processes.forEach((process, index) => {
        const li = document.createElement("li");
        li.textContent = `${process.name} (Deadline: ${process.deadline}ms)`;
        if (index === 0) {
            ongoingList.appendChild(li);
        } else {
            queuedList.appendChild(li);
        }
    });

    startProcesses(processes);
}

function startProcesses(processes) {
    if (processes.length === 0) return;

    const currentProcess = processes.shift();
    setTimeout(() => {
        addCompletedProcess(currentProcess);
        displayProcesses(processes);
    }, currentProcess.deadline);
}

function addCompletedProcess(process) {
    const completedList = document.getElementById("completed-list");
    const li = document.createElement("li");
    li.textContent = `Task : ${process.name} (Completed)`;
    completedList.appendChild(li);
}

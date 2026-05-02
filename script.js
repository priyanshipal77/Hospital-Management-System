function login() {
    let u = username.value;
    let p = password.value;

    if (u === "admin" && p === "1234") {
        loginBox.style.display = "none";
        dashboard.style.display = "block";
    } else {
        alert("Invalid Login");
    }
}

function show(id) {
    let cards = document.getElementsByClassName("card");
    for (let c of cards) c.style.display = "none";
    document.getElementById(id).style.display = "block";
}

let doctors = [];
let patients = [];
let appointments = [];
let bills = [];

/* Doctor */
function addDoctor() {
    let d = {
        id: docId.value,
        name: docName.value,
        spec: docSpec.value
    };

    doctors.push(d);
    doctorList.innerHTML += `<li>${d.id} - ${d.name} (${d.spec})</li>`;

    docId.value = "";
    docName.value = "";
    docSpec.value = "";
}

/* Patient */
function addPatient() {
    let p = {
        id: patId.value,
        name: patName.value,
        age: patAge.value
    };

    patients.push(p);
    patientList.innerHTML += `<li>${p.id} - ${p.name} (${p.age})</li>`;

    patId.value = "";
    patName.value = "";
    patAge.value = "";
}

/* Appointment */
function bookAppointment() {
    let a = {
        pid: appPid.value,
        did: appDid.value
    };

    appointments.push(a);
    appointmentList.innerHTML += `<li>Patient ${a.pid} → Doctor ${a.did}</li>`;

    appPid.value = "";
    appDid.value = "";
}

/* Billing */
function generateBill() {
    let c = Number(consult.value) || 0;
    let m = Number(med.value) || 0;
    let t = Number(test.value) || 0;

    let total = c + m + t;

    let b = {
        pid: billPid.value,
        total: total
    };

    bills.push(b);
    billList.innerHTML += `<li>Patient ${b.pid} → ₹${b.total}</li>`;

    billPid.value = "";
    consult.value = "";
    med.value = "";
    test.value = "";
}
let students = [];

// Disable Enter key
document.getElementById("admissionForm").addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
    }
});

// SAVE when Submit clicked
document.getElementById("admissionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect Student Name
    let nameBoxes = document.querySelectorAll(".box-row:nth-of-type(1) input");
    let studentName = "";
    nameBoxes.forEach(box => {
        studentName += box.value;
    });

    // Collect Father Name
    let fatherBoxes = document.querySelectorAll(".box-row:nth-of-type(2) input");
    let fatherName = "";
    fatherBoxes.forEach(box => {
        fatherName += box.value;
    });

    let student = {
        Name: studentName,
        Father_Name: fatherName,
        Surname: document.getElementById("Surname").value,
        Guardian: document.getElementById("Guardian").value,
        Religion: document.getElementById("religion").value,
        Nationality: document.getElementById("Nationality").value,
        DOB: document.getElementById("dob").value,
        Address: document.getElementById("address").value,
        Mobile: document.getElementById("Mobile").value,
        Class: document.getElementById("class").value,
        Previous_School: document.getElementById("PSA").value
    };

    students.push(student);

    alert("Student Saved Successfully!");

    document.getElementById("admissionForm").reset();
});

// DOWNLOAD when Excel button clicked
function exportToExcel() {

    if (students.length === 0) {
        alert("No Data Available!");
        return;
    }

    const worksheet = XLSX.utils.json_to_sheet(students);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Admissions");

    XLSX.writeFile(workbook, "Admissions_Data.xlsx");
}
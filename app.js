function submitForm() {
    
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const mobile = document.getElementById("mobile").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const address = document.getElementById("address").value;
    const country = document.getElementById("country").value;
    const city = document.getElementById("city").value;
    const pinCode = document.getElementById("pinCode").value;
    const state = document.getElementById("state").value;
    const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(hobby => hobby.value);

    
    const matricBoard = document.getElementById("matricBoard").value;
    const matricPercentage = document.getElementById("matricPercentage").value;
    const matricYear = document.getElementById("matricYear").value;

    const interBoard = document.getElementById("interBoard").value;
    const interPercentage = document.getElementById("interPercentage").value;
    const interYear = document.getElementById("interYear").value;

    const gradBoard = document.getElementById("gradBoard").value;
    const gradPercentage = document.getElementById("gradPercentage").value;
    const gradYear = document.getElementById("gradYear").value;

    const courseApplied = document.querySelector('input[name="course"]:checked')?.value;

    
    if (!firstName || !lastName || !dob || !mobile || !gender || !address || !country || !city || !pinCode || !state) {
        alert("Please fill in all required personal information fields.");
        return;
    }

    if (mobile.length !== 11 || isNaN(mobile)) {
        alert("Mobile number must be 11 digits.");
        return;
    }

    if (pinCode.length !== 4 || isNaN(pinCode)) {
        alert("Pin code must be 4 digits.");
        return;
    }

    if (!matricBoard || !matricPercentage || !matricYear || !interBoard || !interPercentage || !interYear || !gradBoard || !gradPercentage || !gradYear) {
        alert("Please fill in all qualification fields.");
        return;
    }

    
    alert(JSON.stringify({
        firstName,
        lastName,
        dob,
        mobile,
        gender,
        address,
        country,
        city,
        pinCode,
        state,
        hobbies,
        qualifications: [
            { level: "Matric", board: matricBoard, percentage: matricPercentage, year: matricYear },
            { level: "Intermediate", board: interBoard, percentage: interPercentage, year: interYear },
            { level: "Graduation", board: gradBoard, percentage: gradPercentage, year: gradYear }
        ],
        courseApplied
    }, null, 2));

    alert("Form submitted successfully!");
}

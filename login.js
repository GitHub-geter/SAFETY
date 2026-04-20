// selecting the sections
const loginSection = document.querySelector(".login-section")
const registerSection = document.querySelector(".register-section")
const emergencySection = document.querySelector(".emergency-section")

// selecting the links
const goLogin = document.querySelectorAll(".go-login")
const goRegister = document.querySelector(".go-register")
const goEmergency = document.querySelector(".go-emergency")

goLogin.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        loginSection.style.display = "block";
        registerSection.style.display = "none";
        emergencySection.style.display = "none";
    });
});

goRegister.addEventListener("click",()=>{
    // Show
    registerSection.style.display = "block";
    
    // Hide
    loginSection.style.display = "none";
    emergencySection.style.display = "none";
});

goEmergency.addEventListener("click",()=>{
    // Show
    emergencySection.style.display = "block";
    
    // Hide
    registerSection.style.display = "none";
    loginSection.style.display = "none";
});

function handleLogin() {
    // 1. Get input values
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const role = document.getElementById('login-role').value;

    // TODO: Replace this block with fetch() once backend is ready
    // ---------------------------------------------------------
    // DUMMY DATA FOR TESTING
    const DUMMY_EMAIL = "sovn.com";
    const DUMMY_PASS = "12345";

    // 2. Strictness Check: Empty Fields
    if (email === "" || password === "") {
        alert("Strictness Error: Email and Password cannot be empty!");
        return; // Stops the function here
    }

    // 3. Strictness Check: Credentials Verification
    if (email === DUMMY_EMAIL && password === DUMMY_PASS) {
        
        // 4. Role-based Redirection
        if (role === "user") {
            window.location.href = "user.html"; 
        } else if (role === "staff") {
            window.location.href = "staff.html";
        } else {
            alert("Please select a valid role!");
        }

    } else {
        // If credentials don't match our dummy data
        alert("Access Denied: Invalid Email or Password!");
    }
    // ---------------------------------------------------------
}

// the fetch code of login 
/**
 * async function handleLogin() {
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const role = document.getElementById('login-role').value;

    // 1. Client-side Validation (Always do this before calling the server)
    if (email === "" || password === "") {
        alert("Email and Password cannot be empty!");
        return;
    }

    try {
        // 2. The Fetch Call
        // Replace 'http://localhost:8080/api/login' with your friend's actual URL later
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                role: role
            })
        });

        // 3. Convert response to JSON
        const result = await response.json();

        // 4. Logic based on Backend Response
        if (response.ok) {
            // response.ok means status code is 200-299
            alert("Login Successful! Welcome " + (result.name || "User"));

            // Use the role from the backend or the one selected to redirect
            if (role === "user") {
                window.location.href = "user.html";
            } else if (role === "staff") {
                window.location.href = "staff.html";
            }
        } else {
            // Handle error message from backend (e.g., "Wrong password")
            alert("Login Failed: " + (result.message || "Invalid credentials"));
        }

    } catch (error) {
        // Handle network errors (e.g., Server is down)
        console.error("Network Error:", error);
        alert("Cannot connect to server. Is the backend running?");
    }
}
 */

//fetch register
/**
 * async function handleRegister() {
    const name = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value.trim();
    const role = document.getElementById('register-role').value;

    // 1. Basic Frontend Validation
    if (!name || !email || !password) {
        alert("Please fill in all fields!");
        return;
    }

    try {
        // 2. The Fetch Call for Registration
        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                role: role
            })
        });

        const result = await response.json();

        if (response.ok) {
            alert("Registration Successful! Please login now.");
            // 3. Automatically switch back to the login section
            document.querySelector(".register-section").style.display = "none";
            document.querySelector(".login-section").style.display = "block";
        } else {
            alert("Registration Failed: " + (result.message || "Something went wrong"));
        }
    } catch (error) {
        console.error("Network Error:", error);
        alert("Server is not responding.");
    }
}
 */
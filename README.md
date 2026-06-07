# Web Application Firewall (WAF)

A full-stack AI-powered Web Application Firewall (WAF) project that detects and blocks malicious web attacks such as:
-> SQL Injection
-> Cross-Site Scripting (XSS)
-> Path Traversal
-> Command Injection
Blocked attacks are logged and displayed in a real-time dashboard.

### Frontend

https://webapplication-firewall.netlify.app/

<img width="1501" height="597" alt="Screenshot 2026-06-07 133525" src="https://github.com/user-attachments/assets/48a79e8c-98d0-411e-9690-bd110287c14a" />


### Backend 

https://web-application-firewalls.onrender.com/

<img width="561" height="242" alt="Screenshot 2026-06-07 133532" src="https://github.com/user-attachments/assets/ad85cd29-7901-4c9c-91cc-92f03e86936c" />

### Database

<img width="624" height="476" alt="image" src="https://github.com/user-attachments/assets/a0d7d41b-3972-4b6a-a2c8-3a3d4e9ef26f" />


## Features
* Detects malicious requests
* Blocks common web attacks
* Logs attack details into MongoDB
* Displays blocked attacks in dashboard
* AI/ML-based detection support
* Full-stack deployment

<img width="663" height="255" alt="Screenshot 2026-06-07 133456" src="https://github.com/user-attachments/assets/e654a8ac-075e-41ab-aece-77f5c3a15673" />


## Tech Stack
### Frontend
* React.js
* Axios
* Netlify

### Backend
* Node.js
* Express.js
* TensorFlow.js
* Render

### Database
* MongoDB

## Installation

### Clone Repository
git clone https://github.com/Gaddambhavyasree/Web-application-firewall.git
### Install Backend Dependencies
npm install
### Run Backend
npm start (or) npm run dev
## Environment Variables
Create a .env file:
MONGO_URI=your_mongodb_uri
PORT=5000

## API Endpoints

### Get Logs
GET /logs
Returns blocked attack logs.

## Example Attacks
### SQL Injection
?id=' OR 1=1 --

### XSS
<script>alert(1)</script>

### Path Traversal
../../etc/passwd

<img width="663" height="255" alt="Screenshot 2026-06-07 133456" src="https://github.com/user-attachments/assets/41288eae-262c-4d78-b1c0-6e34ee9a2dc3" />


## Author
Bhavya Sree
Cyber Security Student | Full Stack Developer

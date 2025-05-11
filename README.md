final_project
HireMe is a full-stack job portal web application built using Flask (Python) for the backend and HTML, CSS, JavaScript for the frontend.

Technologies Used: Frontend: HTML5 CSS3 JavaScript (Vanilla)

Backend: Python Flask Framework

Database: SQLite3 (for local development)

Tools: VS Code

Git & GitHub

FOLDER STRUCTURE
final_project/

├── app.py ← this file

├── database.py

├── pythonfiles/

│ ├── report.py

│ ├── Student_reset_pass.py

│ ├── rec_forgotpassword.py

│ ├── recruiter_register.py

│ ├── create_job.py

│ ├── recruiter_home.py

│ ├── Student_home.py

│ ├── recruiterslogin.py

│ ├── students_login.py

│ └── Students_register.py

├── templates/

│ ├── index.html

│ ├── student_register.html

│ ├── recruiter_register.html

│ ├── recruiter_home.html

│ ├── recruiter_login.html

│ ├── student_login.html

│ ├── student_home.html

│ ├── job_details.html

│ ├── rec_forgot_password.html

│ ├── student_reset_password.html

│ └── report.html

├── static/

│ ├── css/

│ ├── js/

│ └── images/

├── requirements.txt

└── README.md
SETUP INSTRUCTIONS
Clone the repository git clone 

Navigate into the project directory cd final_project

Create a virtual environment (optional but recommended) python -m venv venv source venv/bin/activate

Install dependencies (Flask, etc.) pip install -r requirements.txt

Run the app python app.py

# Online Registration Form - Programming Assignment 2

A web application for online student registration built with HTML, CSS, JavaScript, jQuery, and PHP.

## Features

- **Responsive Design**: Clean and modern UI with gradient styling
- **Client-Side Validation**: Real-time form validation using JavaScript and jQuery
- **Server-Side Processing**: PHP processes and displays submitted data
- **Input Sanitization**: Secure handling of user input
- **Interactive Elements**: Dynamic error messages and smooth animations

## Technologies Used

- HTML5
- CSS3 (with gradients and animations)
- JavaScript
- jQuery 3.6.0
- PHP

## Form Fields

- Full Name (text validation)
- Email Address (email format validation)
- Phone Number (10-digit validation)
- Date of Birth (age validation: 15-100 years)
- Gender (radio buttons)
- Course Selection (dropdown)
- Address (textarea)
- Terms & Conditions (checkbox)

## Installation & Setup

### Local Testing with XAMPP

1. Download and install [XAMPP](https://www.apachefriends.org/)
2. Clone this repository to your XAMPP `htdocs` folder:
   ```
   cd C:\xampp\htdocs
   git clone <your-repo-url>
   ```
3. Start Apache server from XAMPP Control Panel
4. Open browser and navigate to: `http://localhost/<folder-name>/index.html`

### Testing the Application

1. Fill out the registration form with valid information
2. Click "Submit Registration" button
3. View the formatted output displaying all submitted information
4. Use "Submit Another Registration" to return to the form

## Validation Rules

- **Name**: Minimum 3 characters, letters only
- **Email**: Valid email format required
- **Phone**: Exactly 10 digits
- **Age**: Between 15 and 100 years
- **All fields**: Required (marked with *)

## File Structure

```
├── index.html          # Main registration form
├── style.css           # Styling and layout
├── script.js           # jQuery validation logic
├── process.php         # Server-side processing
└── README.md           # Documentation
```

## GitHub Hosting

This project is hosted on GitHub. To view the code:
1. Visit the repository
2. Clone or download the files
3. Follow installation instructions above

## Assignment Details

- **Course**: Programming Assignment 2
- **Due Date**: December 19
- **Marks**: 5
- **Objective**: Build a web application with form validation and PHP processing

## Author

Student Registration System - 2024

<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    // Sanitize and retrieve form data
    $fullName = htmlspecialchars(trim($_POST['fullName']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $dob = htmlspecialchars(trim($_POST['dob']));
    $gender = htmlspecialchars(trim($_POST['gender']));
    $course = htmlspecialchars(trim($_POST['course']));
    $address = htmlspecialchars(trim($_POST['address']));
    $terms = isset($_POST['terms']) ? 'Accepted' : 'Not Accepted';
    
    // Calculate age from date of birth
    $birthDate = new DateTime($dob);
    $today = new DateTime();
    $age = $today->diff($birthDate)->y;
    
    // Format the date for display
    $formattedDate = date('F d, Y', strtotime($dob));
    
    // Get current date and time for registration
    $registrationDate = date('F d, Y h:i A');
    
} else {
    // Redirect to form if accessed directly
    header("Location: index.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Successful</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="success-container">
        <div class="success-header">
            <div class="success-icon">✓</div>
            <h1>Registration Successful!</h1>
            <p>Your application has been submitted successfully.</p>
        </div>
        
        <h2 style="color: #667eea; margin-bottom: 20px;">Registration Details</h2>
        
        <table class="info-table">
            <tr>
                <td>Registration Date:</td>
                <td><?php echo $registrationDate; ?></td>
            </tr>
            <tr>
                <td>Full Name:</td>
                <td><?php echo $fullName; ?></td>
            </tr>
            <tr>
                <td>Email Address:</td>
                <td><?php echo $email; ?></td>
            </tr>
            <tr>
                <td>Phone Number:</td>
                <td><?php echo $phone; ?></td>
            </tr>
            <tr>
                <td>Date of Birth:</td>
                <td><?php echo $formattedDate; ?> (Age: <?php echo $age; ?> years)</td>
            </tr>
            <tr>
                <td>Gender:</td>
                <td><?php echo $gender; ?></td>
            </tr>
            <tr>
                <td>Course Selected:</td>
                <td><?php echo $course; ?></td>
            </tr>
            <tr>
                <td>Address:</td>
                <td><?php echo nl2br($address); ?></td>
            </tr>
            <tr>
                <td>Terms & Conditions:</td>
                <td><?php echo $terms; ?></td>
            </tr>
        </table>
        
        <div style="text-align: center;">
            <a href="index.html" class="back-btn">Submit Another Registration</a>
        </div>
    </div>
</body>
</html>

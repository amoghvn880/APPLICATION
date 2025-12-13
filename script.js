$(document).ready(function() {
    // Clear error messages on input
    $('input, select, textarea').on('input change', function() {
        $(this).closest('.form-group').find('.error').text('');
    });

    // Form validation
    $('#registrationForm').on('submit', function(e) {
        let isValid = true;
        
        // Clear all previous errors
        $('.error').text('');

        // Validate Full Name
        const fullName = $('#fullName').val().trim();
        if (fullName === '') {
            $('#nameError').text('Full name is required');
            isValid = false;
        } else if (fullName.length < 3) {
            $('#nameError').text('Name must be at least 3 characters');
            isValid = false;
        } else if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            $('#nameError').text('Name should contain only letters');
            isValid = false;
        }

        // Validate Email
        const email = $('#email').val().trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '') {
            $('#emailError').text('Email is required');
            isValid = false;
        } else if (!emailPattern.test(email)) {
            $('#emailError').text('Please enter a valid email address');
            isValid = false;
        }

        // Validate Phone
        const phone = $('#phone').val().trim();
        const phonePattern = /^[0-9]{10}$/;
        if (phone === '') {
            $('#phoneError').text('Phone number is required');
            isValid = false;
        } else if (!phonePattern.test(phone)) {
            $('#phoneError').text('Phone number must be 10 digits');
            isValid = false;
        }

        // Validate Date of Birth
        const dob = $('#dob').val();
        if (dob === '') {
            $('#dobError').text('Date of birth is required');
            isValid = false;
        } else {
            const birthDate = new Date(dob);
            const today = new Date();
            const age = today.getFullYear() - birthDate.getFullYear();
            if (age < 15 || age > 100) {
                $('#dobError').text('Age must be between 15 and 100 years');
                isValid = false;
            }
        }

        // Validate Gender
        if (!$('input[name="gender"]:checked').val()) {
            $('#genderError').text('Please select a gender');
            isValid = false;
        }

        // Validate Course
        if ($('#course').val() === '') {
            $('#courseError').text('Please select a course');
            isValid = false;
        }

        // Validate Address
        const address = $('#address').val().trim();
        if (address === '') {
            $('#addressError').text('Address is required');
            isValid = false;
        } else if (address.length < 10) {
            $('#addressError').text('Address must be at least 10 characters');
            isValid = false;
        }

        // Validate Terms
        if (!$('#terms').is(':checked')) {
            $('#termsError').text('You must agree to the terms and conditions');
            isValid = false;
        }

        if (!isValid) {
            e.preventDefault();
            // Scroll to first error
            $('html, body').animate({
                scrollTop: $('.error:not(:empty)').first().offset().top - 100
            }, 500);
        }
    });

    // Phone number input - only allow numbers
    $('#phone').on('keypress', function(e) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    });

    // Name input - only allow letters and spaces
    $('#fullName').on('keypress', function(e) {
        const char = String.fromCharCode(e.which);
        if (!/[a-zA-Z\s]/.test(char)) {
            e.preventDefault();
        }
    });
});

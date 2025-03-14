document.getElementById('register').addEventListener('click', function() {
    const loginCard = document.querySelector('.login-card');
    const registerCard = document.querySelector('.register-card');
    const label = document.querySelector('.label');
    const paraLabel = document.querySelector(".have-account");
    const registerLabel = document.querySelector('#register');

    // Add classes for the fade-out and fade-in animations
    loginCard.classList.add('fade-out');
    registerCard.classList.add('fade-in');

    // After the fade-out animation completes (500ms), update the display
    setTimeout(() => {
        // Hide login card and show register card
        loginCard.style.visibility = 'hidden';
        registerCard.style.visibility = 'visible';
        label.style.borderTopRightRadius = '25px';
        label.style.borderBottomRightRadius = '25px';
        paraLabel.textContent = 'Already have an account?';
        registerLabel.textContent = 'Login';

        // Change the display after visibility is set
        loginCard.style.display = 'none';
        registerCard.style.display = 'flex';

        // Reverse the layout of the wrapper
        document.querySelector('.wrapper').style.flexDirection = 'row-reverse';
    }, 500); // This matches the fade-out duration (0.5s)
});
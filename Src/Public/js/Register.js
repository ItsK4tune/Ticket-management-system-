document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {

        // Create POST method to /api/register  
        const response = await fetch('/api/dang-ky', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Username: username,Password: password })    
        });

        // Check register condition 
        if (response.ok) {
            console.log(response.message);
            alert('Đăng ký thành công');

            // Redirect to /login route
            window.location.href = '/dang-nhap';
        } else {
            console.log(response.message);
            alert('Đã có người sử dụng tên tài khoản này, vui lòng dùng tên tài khoản khác');
        }
    } 
    catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again later.');
    }
});

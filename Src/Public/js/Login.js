document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Create POST method to /api/login
        const response = await fetch('/api/dang-nhap', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({Username: username,Password: password })    
        });

        // Get JWT token
        const data = await response.json();

        // Check login condition
        if (response.ok) {
            console.log(response);
            if (data.message === 'Successed'){

                alert('Đăng nhập thành công <3');

                // Redirect to /trang-chu/:token route
                window.location.href = `${data.redirectURL}`;
            }

            else
                alert('Tài khoản hoặc mật khẩu không đúng');
        } 
        else {
            alert('Không thể đăng nhập do lỗi kết nối đến server');
        }
    } 
    catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again later.');
    }
});

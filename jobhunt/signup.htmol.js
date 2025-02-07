<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JobHunt - Sign In</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #fff;
        }

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 4rem;
            border-bottom: 1px solid #e5e7eb;
        }

        .logo {
            font-size: 24px;
            font-weight: bold;
            text-decoration: none;
        }

        .logo-job {
            color: #8B5CF6;
        }

        .logo-hunt {
            color: #FF6B6B;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
        }

        .nav-links a {
            text-decoration: none;
            color: #374151;
            font-size: 14px;
            font-weight: 500;
            transition: color 0.2s;
        }

        .nav-links a:hover {
            color: #8B5CF6;
        }

        .container {
            max-width: 400px;
            margin: 2rem auto;
            padding: 0 1rem;
        }

        .auth-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .auth-header h1 {
            font-size: 30px;
            color: #111827;
            margin-bottom: 0.5rem;
        }

        .auth-header p {
            color: #6B7280;
            font-size: 14px;
        }

        .auth-tabs {
            display: flex;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 2rem;
        }

        .tab {
            padding: 0.5rem 1.5rem;
            border-radius: 9999px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            background: none;
        }

        .tab.active {
            background-color: #8B5CF6;
            color: white;
        }

        .tab:not(.active) {
            color: #6B7280;
        }

        .tab:not(.active):hover {
            color: #8B5CF6;
        }

        .auth-form {
            background: white;
            padding: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            border: 1px solid #e5e7eb;
        }

        .form-group {
            margin-bottom: 1.5rem;
        }

        .form-group label {
            display: block;
            font-size: 14px;
            font-weight: 500;
            color: #374151;
            margin-bottom: 0.5rem;
        }

        .form-group input {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid #D1D5DB;
            border-radius: 8px;
            font-size: 14px;
            transition: all 0.2s;
        }

        .form-group input:focus {
            outline: none;
            border-color: #8B5CF6;
            box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
        }

        .remember-forgot {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .remember-me {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .remember-me input[type="checkbox"] {
            width: 1rem;
            height: 1rem;
            border-radius: 4px;
            border: 1px solid #D1D5DB;
            accent-color: #8B5CF6;
        }

        .remember-me label {
            font-size: 14px;
            color: #374151;
        }

        .forgot-password {
            font-size: 14px;
            color: #8B5CF6;
            text-decoration: none;
        }

        .forgot-password:hover {
            text-decoration: underline;
        }

        .submit-btn {
            width: 100%;
            padding: 0.75rem;
            background-color: #8B5CF6;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: background-color 0.2s;
        }

        .submit-btn:hover {
            background-color: #7C3AED;
        }

        .divider {
            margin: 1.5rem 0;
            display: flex;
            align-items: center;
            text-align: center;
        }

        .divider::before,
        .divider::after {
            content: '';
            flex: 1;
            border-bottom: 1px solid #E5E7EB;
        }

        .divider span {
            padding: 0 1rem;
            color: #6B7280;
            font-size: 14px;
        }

        .social-buttons {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }

        .social-btn {
            padding: 0.75rem;
            border: 1px solid #D1D5DB;
            border-radius: 8px;
            background: white;
            color: #374151;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            transition: background-color 0.2s;
        }

        .social-btn:hover {
            background-color: #F9FAFB;
        }

        .social-btn img {
            width: 20px;
            height: 20px;
        }

        @media (max-width: 640px) {
            .header {
                padding: 1rem;
            }

            .nav-links {
                display: none;
            }

            .container {
                margin: 1rem auto;
            }

            .auth-form {
                padding: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <a href="/" class="logo">
            <span class="logo-job">Job</span><span class="logo-hunt">Hunt</span>
        </a>
        <nav class="nav-links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Jobs</a>
            <a href="#">Services</a>
            <a href="#">Client</a>
        </nav>
    </header>

    <div class="container">
        <div class="auth-header">
            <h1>Welcome to <span class="logo-job">JobHunt</span></h1>
            <p>Your future starts here. Discover countless opportunities.</p>
        </div>

        <div class="auth-tabs">
            <button class="tab active">Sign In</button>
            <button class="tab">Register</button>
        </div>

        <div class="auth-form">
            <form>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" id="email" required placeholder="Enter your email">
                </div>

                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" required placeholder="Enter your password">
                </div>

                <div class="remember-forgot">
                    <div class="remember-me">
                        <input type="checkbox" id="remember">
                        <label for="remember">Remember me</label>
                    </div>
                    <a href="#" class="forgot-password">Forgot password?</a>
                </div>

                <button type="submit" class="submit-btn">Sign In</button>

                <div class="divider">
                    <span>Or continue with</span>
                </div>

                <div class="social-buttons">
                    <button type="button" class="social-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z" fill="#4285F4"/>
                        </svg>
                        Google
                    </button>
                    <button type="button" class="social-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24">
                            <path d="M19,3H5C3.895,3,3,3.895,3,5v14c0,1.105,0.895,2,2,2h14c1.105,0,2-0.895,2-2V5C21,3.895,20.105,3,19,3z M9,17H6.477v-7H9 V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977 C13.93,10.407,14.581,10,15.802,10C17.023,10,18,10.977,18,13.174V17z" fill="#0077B5"/>
                        </svg>
                        LinkedIn
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
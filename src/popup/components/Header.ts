import React, { useState } from 'react';
import { AuthService } from '../../core/auth';

const Header: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(AuthService.isAuthenticated());
    
    const handleLogin = () => {
        // 打开登录页面或弹出登录对话框
        console.log('打开登录');
    };
    
    const handleLogout = () => {
        AuthService.logout();
        setIsLoggedIn(false);
    };

    return (
        <header className="popup-header">
            <div className="header-title">
                <h1>南京邮电大学服务助手</h1>
            </div>
            <div className="header-actions">
                {isLoggedIn ? (
                    <button className="logout-button" onClick={handleLogout}>退出登录</button>
                ) : (
                    <button className="login-button" onClick={handleLogin}>登录</button>
                )}
                <button className="settings-button">设置</button>
            </div>
        </header>
    );
};

export default Header;
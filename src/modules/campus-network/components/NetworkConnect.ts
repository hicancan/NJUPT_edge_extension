import React, { useState, useEffect } from 'react';
import { authenticateNetwork, checkNetworkStatus } from '../api';
import NetworkStatus from './NetworkStatus';

const NetworkConnect: React.FC = () => {
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [networkStatus, setNetworkStatus] = useState<{connected: boolean, authStatus: string}>({
        connected: false,
        authStatus: 'unauthenticated'
    });
    const [savedAccounts, setSavedAccounts] = useState<{username: string, password: string}[]>([]);
    const [rememberAccount, setRememberAccount] = useState<boolean>(false);

    useEffect(() => {
        // 加载保存的账号
        const loadSavedAccounts = async () => {
            const accounts = await chrome.storage.local.get('networkAccounts');
            if (accounts.networkAccounts) {
                setSavedAccounts(accounts.networkAccounts);
                // 如果有保存的账号，自动填入第一个
                if (accounts.networkAccounts.length > 0) {
                    setUsername(accounts.networkAccounts[0].username);
                    setPassword(accounts.networkAccounts[0].password);
                }
            }
        };
        
        // 检查当前网络状态
        const checkNetwork = async () => {
            try {
                const status = await checkNetworkStatus();
                setNetworkStatus(status);
            } catch (error) {
                console.error('检查网络状态失败:', error);
            }
        };

        loadSavedAccounts();
        checkNetwork();
        
        // 设置定时检查网络状态
        const intervalId = setInterval(checkNetwork, 10000);
        return () => clearInterval(intervalId);
    }, []);

    const handleConnect = async () => {
        setLoading(true);
        setMessage('');
        
        try {
            const result = await authenticateNetwork(username, password);
            if (result.success) {
                setMessage('连接成功！');
                setNetworkStatus({
                    connected: true,
                    authStatus: 'authenticated'
                });
                
                // 保存账号
                if (rememberAccount) {
                    // 检查是否已存在相同用户名的账号
                    const accountExists = savedAccounts.some(acc => acc.username === username);
                    if (!accountExists) {
                        const newAccounts = [...savedAccounts, { username, password }];
                        setSavedAccounts(newAccounts);
                        await chrome.storage.local.set({ networkAccounts: newAccounts });
                    }
                }
            } else {
                setMessage(`连接失败: ${result.message}`);
            }
        } catch (error) {
            setMessage('连接出错，请重试');
            console.error('网络连接错误:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAccountSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedUsername = event.target.value;
        const selectedAccount = savedAccounts.find(acc => acc.username === selectedUsername);
        if (selectedAccount) {
            setUsername(selectedAccount.username);
            setPassword(selectedAccount.password);
        }
    };

    return (
        <div className="network-connect">
            <NetworkStatus status={networkStatus} />
            
            <div className="connect-form">
                <h3>连接校园网</h3>
                
                {savedAccounts.length > 0 && (
                    <div className="saved-accounts">
                        <label htmlFor="saved-account">选择保存的账号:</label>
                        <select 
                            id="saved-account" 
                            onChange={handleAccountSelect}
                        >
                            <option value="">选择账号...</option>
                            {savedAccounts.map(acc => (
                                <option key={acc.username} value={acc.username}>{acc.username}</option>
                            ))}
                        </select>
                    </div>
                )}
                
                <div className="form-group">
                    <label htmlFor="username">用户名:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="校园网账号"
                    />
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">密码:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="校园网密码"
                    />
                </div>
                
                <div className="form-group checkbox">
                    <input
                        type="checkbox"
                        id="remember"
                        checked={rememberAccount}
                        onChange={(e) => setRememberAccount(e.target.checked)}
                    />
                    <label htmlFor="remember">记住账号</label>
                </div>
                
                <button 
                    onClick={handleConnect} 
                    disabled={loading || !username || !password}
                    className="connect-button"
                >
                    {loading ? '连接中...' : '一键连接'}
                </button>
                
                {message && <div className={networkStatus.connected ? "success-message" : "error-message"}>{message}</div>}
            </div>
        </div>
    );
};

export default NetworkConnect;

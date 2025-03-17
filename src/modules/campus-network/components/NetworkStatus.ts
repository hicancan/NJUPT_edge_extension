import React from 'react';

interface NetworkStatusProps {
    status: {
        connected: boolean;
        authStatus: string;
        ssid?: string;
        signal?: string;
    };
}

// Create a function that returns JSX element properties instead of JSX directly
const NetworkStatus = ({ status }: NetworkStatusProps): React.ReactElement => {
    const getStatusText = () => {
        if (!status.connected) {
            return '未连接到校园网络';
        }
        
        switch (status.authStatus) {
            case 'authenticated':
                return '已连接并通过认证';
            case 'authenticating':
                return '正在进行认证...';
            case 'unauthenticated':
                return '已连接校园网络，未认证';
            case 'failed':
                return '认证失败，请重试';
            default:
                return '网络状态未知';
        }
    };
    
    const getStatusColor = () => {
        if (!status.connected) return 'red';
        
        switch (status.authStatus) {
            case 'authenticated':
                return 'green';
            case 'authenticating':
                return 'orange';
            case 'unauthenticated':
                return 'orange';
            case 'failed':
                return 'red';
            default:
                return 'gray';
        }
    };
    return React.createElement('div', { className: 'network-status' }, [
        React.createElement('div', { className: 'status-indicator', key: 'indicator' }, [
            React.createElement('div', { className: `status-dot ${getStatusColor()}`, key: 'status-dot' }),
            React.createElement('div', { className: 'status-text', key: 'status-text' }, getStatusText())
        ]),
        
        status.connected && status.ssid && React.createElement('div', { className: 'network-info', key: 'network-info' }, [
            React.createElement('div', { className: 'network-name', key: 'network-name' }, `网络名称: ${status.ssid}`),
            status.signal && React.createElement('div', { className: 'signal-strength', key: 'signal-strength' }, `信号强度: ${status.signal}`)
        ])
    ]);
};

export default NetworkStatus;

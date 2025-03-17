/**
 * 检测当前网络状态
 * @returns 网络状态信息
 */
export const detectNetworkStatus = async () => {
    try {
        // 尝试访问校园网认证页面检测连接状态
        const response = await fetch('http://p.njupt.edu.cn', {
            method: 'HEAD',
            mode: 'no-cors',
            cache: 'no-cache',
        });
        
        // 能够访问认证页面，说明已连接到校园网但可能未认证
        const connected = true;
        
        // 尝试访问外部资源来判断是否已认证
        // 如果能够成功访问外网，则说明已经通过认证
        let authStatus = 'unauthenticated';
        try {
            const authCheck = await fetch('https://www.baidu.com', {
                method: 'HEAD',
                mode: 'no-cors',
                cache: 'no-cache',
            });
            
            if (authCheck.status === 0 || authCheck.status === 200) {
                authStatus = 'authenticated';
            }
        } catch (error) {
            // 无法访问外网，说明未认证
            authStatus = 'unauthenticated';
        }
        
        return {
            connected,
            authStatus,
            ssid: '校园网', // 这里实际应该从系统获取
            signal: '良好'  // 这里实际应该从系统获取
        };
    } catch (error) {
        // 如果连认证页面都无法访问，说明未连接到校园网
        return {
            connected: false,
            authStatus: 'unauthenticated'
        };
    }
};

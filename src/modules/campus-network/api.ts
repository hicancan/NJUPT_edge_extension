import axios from 'axios';
import { detectNetworkStatus } from './utils/network-detector';
declare const chrome: any;

// 认证响应类型定义
interface AuthResponse {
    success: boolean;
    message?: string;
}

// 校园网认证服务器地址
const AUTH_URL = 'http://p.njupt.edu.cn:801/eportal/';

/**
 * 校园网认证
 * @param username 校园网账号
 * @param password 校园网密码
 * @returns 认证结果
 */
export const authenticateNetwork = async (username: string, password: string) => {
    try {
        // 记录连接尝试
        addConnectionRecord({ username, timestamp: Date.now() });
        
        // 检查网络状态
        const status = await checkNetworkStatus();
        if (!status.connected) {
            return { success: false, message: '未连接到校园网络' };
        // 执行认证请求
        const response = await axios.post<AuthResponse>(`${AUTH_URL}/portal/login`, {
            username,
            password,
            // 其他可能需要的参数
        });
        
        if (response.data && response.data.success) {
            return { success: true, message: '认证成功' };
        } else {
            return {
                success: false,
                message: response.data?.message || '认证失败，请检查账号和密码'
            };
        }
        } else {
            return {
                success: false,
                message: response.data?.message || '认证失败，请检查账号和密码'
            };
        }
    } catch (error) {
        console.error('校园网认证错误:', error);
        return { success: false, message: '认证过程出错，请重试' };
    }
};

/**
 * 检查当前网络状态
 * @returns 网络状态信息
 */
export const checkNetworkStatus = async () => {
    try {
        // 使用网络状态检测工具
        const status = await detectNetworkStatus();
        return status;
    } catch (error) {
        console.error('检查网络状态错误:', error);
        return {
            connected: false,
            authStatus: 'unauthenticated'
        };
    }
};

/**
 * 添加连接记录
 */
const addConnectionRecord = async (record: { username: string; timestamp: number }) => {
    try {
        // 获取现有记录
        const result = await chrome.storage.local.get('connectionRecords');
        const records = result.connectionRecords || [];
        
        // 添加新记录，并限制最多保存50条
        const updatedRecords = [record, ...records].slice(0, 50);
        
        // 保存记录
        await chrome.storage.local.set({ connectionRecords: updatedRecords });
    } catch (error) {
        console.error('保存连接记录失败:', error);
    }
};

/**
 * 获取连接记录
 */
export const getConnectionRecords = async () => {
    try {
        const result = await chrome.storage.local.get('connectionRecords');
        return result.connectionRecords || [];
    } catch (error) {
        console.error('获取连接记录失败:', error);
        return [];
    }
};

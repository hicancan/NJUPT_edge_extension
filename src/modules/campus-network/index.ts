import NetworkConnect from './components/NetworkConnect';
import NetworkStatus from './components/NetworkStatus';
import AccountManager from './components/AccountManager';
import ConnectionHistory from './components/ConnectionHistory';
import { authenticateNetwork, checkNetworkStatus, getConnectionRecords } from './api';

const CampusNetworkModule = {
    // 组件
    NetworkConnect,
    NetworkStatus,
    AccountManager,
    ConnectionHistory,
    
    // API 函数
    authenticateNetwork,
    checkNetworkStatus,
    getConnectionRecords
};

export default CampusNetworkModule;

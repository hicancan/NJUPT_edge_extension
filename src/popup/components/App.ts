import React, { useState } from 'react';
import Header from './Header';
import ModuleSelector from './ModuleSelector';
import CampusCardModule from '../../modules/campus-card';
import { EduAdminModule } from '../../modules/edu-admin';
import { libraryModule } from '../../modules/library';
import { PeModule } from '../../modules/pe';
import CampusNetworkModule from '../../modules/campus-network';

const App: React.FC = () => {
    const [activeModule, setActiveModule] = useState<string>('home');
    
    // 渲染当前选中的模块内容
    const renderModuleContent = () => {
        switch (activeModule) {
            case 'campus-card':
                return (
                    <div className="module-container">
                        <h2>校园卡服务</h2>
                        <CampusCardModule.CardBalance />
                    </div>
                );
            case 'edu-admin':
                return (
                    <div className="module-container">
                        <h2>教务管理</h2>
                        <EduAdminModule.Schedule />
                    </div>
                );
            case 'library':
                return (
                    <div className="module-container">
                        <h2>图书馆服务</h2>
                        {/* 图书馆模块内容 */}
                    </div>
                );
            case 'campus-network':
                return (
                    <div className="module-container">
                        <h2>校园网连接</h2>
                        <CampusNetworkModule.NetworkConnect />
                    </div>
                );
            default:
                return (
                    <div className="home-container">
                        <h1>南京邮电大学服务助手</h1>
                        <p>欢迎使用南京邮电大学的Edge浏览器插件！</p>
                        <p>请从左侧选择功能模块进行操作。</p>
                    </div>
                );
        }
    };

    return (
        <div className="popup-container">
            <Header />
            <div className="main-content">
                <ModuleSelector activeModule={activeModule} onModuleChange={setActiveModule} />
                <div className="content-area">
                    {renderModuleContent()}
                </div>
            </div>
        </div>
    );
};

export default App;
import React from 'react';
import Header from './Header';

const App: React.FC = () => {
    return (
        <div className="popup-container">
            <Header />
            <main>
                <h1>南京邮电大学服务助手</h1>
                <p>欢迎使用南京邮电大学的Edge浏览器插件！</p>
                {/* 这里可以添加更多的功能模块组件 */}
            </main>
        </div>
    );
};

export default App;
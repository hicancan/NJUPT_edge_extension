import React from 'react';

interface ModuleSelectorProps {
    activeModule: string;
    onModuleChange: (moduleName: string) => void;
}

const ModuleSelector: React.FC<ModuleSelectorProps> = ({ activeModule, onModuleChange }) => {
    const modules = [
        { id: 'home', name: '首页', icon: 'home' },
        { id: 'campus-card', name: '校园卡', icon: 'credit-card' },
        { id: 'edu-admin', name: '教务管理', icon: 'book' },
        { id: 'library', name: '图书馆', icon: 'library' },
        { id: 'pe', name: '体育服务', icon: 'run' },
        { id: 'stadium-booking', name: '场馆预约', icon: 'calendar' },
        { id: 'campus-network', name: '校园网连接', icon: 'wifi' },
        { id: 'others', name: '其他服务', icon: 'more' },
    ];

    return (
        <div className="module-selector">
            <ul>
                {modules.map(module => (
                    <li 
                        key={module.id} 
                        className={`module-item ${activeModule === module.id ? 'active' : ''}`}
                        onClick={() => onModuleChange(module.id)}
                    >
                        <span className={`module-icon ${module.icon}`}></span>
                        <span className="module-name">{module.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ModuleSelector;

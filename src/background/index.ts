// src/background/index.ts

chrome.runtime.onInstalled.addListener(() => {
    console.log("南京邮电大学Edge浏览器插件已安装");
});

// 监听浏览器事件
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch (request.action) {
        case "getData":
            // 处理数据请求
            sendResponse({ data: "这里是数据" });
            break;
        default:
            sendResponse({ error: "未知请求" });
    }
});

// 其他后台逻辑可以在这里添加

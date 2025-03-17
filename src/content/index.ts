// src/content/index.ts

// 内容脚本的入口文件，与校园网站页面交互

// 监听页面加载事件
window.addEventListener('load', () => {
    // 在这里可以执行与校园网站的交互逻辑
    console.log('内容脚本已加载，准备与校园网站交互');
});

// 示例：获取页面中的某个元素并进行操作
const exampleElement = document.querySelector('.example-class');
if (exampleElement) {
    exampleElement.textContent = '内容脚本已成功修改此文本';
}
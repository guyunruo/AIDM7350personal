// script.js
function dance(character) {
    const elements = document.querySelectorAll('.emoji-character');
    elements.forEach(el => {
        el.style.animation = 'emojiDance 0.8s ease';
        setTimeout(() => {
            el.style.animation = '';
        }, 800);
    });
}

function castSpell() {
    // 随机改变背景颜色
    document.body.style.background = `linear-gradient(45deg, ${getRandomColor()}, ${getRandomColor()})`;
    
    // 创建火花效果
    createSparkles(50);
    
    // 添加按钮点击动画
    const button = document.querySelector('.magic-button');
    button.style.transform = 'scale(0.95)';
    setTimeout(() => {
        button.style.transform = 'scale(1)';
    }, 200);
}

function getRandomColor() {
    // 生成鲜艳的随机颜色
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 50%)`;
}

function createSparkles(count) {
    const container = document.querySelector('.sparkles');
    container.innerHTML = ''; // 清除旧的火花
    
    for (let i = 0; i < count; i++) {
        const sparkle = document.createElement('div');
        sparkle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 6 + 4}px;
            height: ${Math.random() * 6 + 4}px;
            background: rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: sparkle ${Math.random() * 0.5 + 0.5}s ease-out;
            pointer-events: none;
        `;
        container.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1000);
    }
}

// 添加动态样式
const style = document.createElement('style');
style.textContent = `
    @keyframes emojiDance {
        0% { transform: translateY(0) rotate(0); }
        25% { transform: translateY(-30px) rotate(-15deg); }
        50% { transform: translateY(0) rotate(0); }
        75% { transform: translateY(-30px) rotate(15deg); }
        100% { transform: translateY(0) rotate(0); }
    }
    
    @keyframes sparkle {
        0% { 
            transform: scale(0) translate(0, 0); 
            opacity: 1;
        }
        100% { 
            transform: scale(2) translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px); 
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 初始化背景
document.body.style.background = 'linear-gradient(45deg, #ff9ff3, #f368e0)';
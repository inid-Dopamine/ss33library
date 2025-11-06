// 切换登录标签
function showTab(tab) {
    // 隐藏所有标签内容
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    
    // 移除所有标签按钮的激活状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // 显示选中的标签内容
    if (tab === 'user') {
        document.getElementById('user-tab').classList.add('active');
        document.querySelector('.tab-btn').classList.add('active');
    } else if (tab === 'admin') {
        document.getElementById('admin-tab').classList.add('active');
        document.querySelectorAll('.tab-btn')[1].classList.add('active');
    }
}

// 处理用户登录
function handleUserLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('user-username').value;
    const password = document.getElementById('user-password').value;
    
    if (!username || !password) {
        alert('请输入用户名和密码！');
        return;
    }
    
    // 模拟登录验证
    if (username && password) {
        alert(`用户 ${username} 登录成功！即将跳转到用户端仪表板...`);
        // 实际项目中这里应该跳转到用户端主页
        // window.location.href = 'user/dashboard.html';
        showUserDashboard();
    } else {
        alert('登录失败，请检查用户名和密码！');
    }
}

// 处理管理员登录
function handleAdminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('admin-username').value;
    const password = document.getElementById('admin-password').value;
    
    if (!username || !password) {
        alert('请输入管理员账号和密码！');
        return;
    }
    
    // 模拟管理员登录验证（默认账号：admin，密码：123456）
    if (username === 'admin' && password === '123456') {
        alert('管理员登录成功！即将跳转到管理端仪表板...');
        showAdminDashboard();
    } else {
        alert('管理员账号或密码错误！\n提示：测试账号 admin，密码 123456');
    }
}

// 显示注册页面（模拟）
function showRegister() {
    alert('注册功能开发中...\n即将跳转到注册页面');
}

// 显示用户端仪表板（模拟）
function showUserDashboard() {
    // 创建用户端仪表板HTML
    const userDashboard = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BookHub - 用户端</title>
        <link rel="stylesheet" href="css/style.css">
        <style>
            body { background: #f5f5f5; }
            .dashboard { max-width: 1200px; margin: 0 auto; padding: 20px; }
            .header { background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
            .welcome { font-size: 24px; color: #333; }
            .nav-menu { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; }
            .menu-card { background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; cursor: pointer; transition: transform 0.3s ease; }
            .menu-card:hover { transform: translateY(-5px); }
            .menu-icon { font-size: 40px; margin-bottom: 15px; }
            .menu-title { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 10px; }
            .menu-desc { color: #666; font-size: 14px; }
            .back-btn { position: fixed; top: 20px; left: 20px; padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; }
        </style>
    </head>
    <body>
        <button class="back-btn" onclick="window.location.href='index.html'">← 返回登录</button>
        <div class="dashboard">
            <div class="header">
                <div class="welcome">欢迎来到 BookHub 用户端</div>
                <div>用户仪表板</div>
            </div>
            <div class="nav-menu">
                <div class="menu-card" onclick="alert('图书管理功能：个人藏书登记、状态更新、详情维护')">
                    <div class="menu-icon">📚</div>
                    <div class="menu-title">图书管理</div>
                    <div class="menu-desc">管理您的个人藏书，包括登记、状态更新和详情维护</div>
                </div>
                <div class="menu-card" onclick="alert('图书交流功能：发布书评、参与讨论、分享读书心得')">
                    <div class="menu-icon">💬</div>
                    <div class="menu-title">图书交流</div>
                    <div class="menu-desc">与书友交流，发布书评，参与讨论区话题</div>
                </div>
                <div class="menu-card" onclick="alert('图书购买功能：浏览市场、筛选图书、在线购买')">
                    <div class="menu-icon">🛒</div>
                    <div class="menu-title">图书购买</div>
                    <div class="menu-desc">浏览二手书市场，筛选购买心仪的图书</div>
                </div>
                <div class="menu-card" onclick="alert('个人中心功能：个人信息、订单管理、收藏夹')">
                    <div class="menu-icon">👤</div>
                    <div class="menu-title">个人中心</div>
                    <div class="menu-desc">管理个人信息，查看订单和收藏的图书</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    
    // 创建新窗口显示用户端仪表板
    const newWindow = window.open('', '_blank', 'width=1000,height=700');
    newWindow.document.write(userDashboard);
    newWindow.document.close();
}

// 显示管理端仪表板（模拟）
function showAdminDashboard() {
    const adminDashboard = `
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>BookHub - 管理端</title>
        <link rel="stylesheet" href="css/style.css">
        <style>
            body { background: #f5f5f5; }
            .dashboard { max-width: 1200px; margin: 0 auto; padding: 20px; }
            .header { background: white; padding: 20px; border-radius: 10px; margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; }
            .welcome { font-size: 24px; color: #333; }
            .nav-menu { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
            .menu-card { background: white; padding: 25px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center; cursor: pointer; transition: transform 0.3s ease; }
            .menu-card:hover { transform: translateY(-5px); }
            .menu-icon { font-size: 40px; margin-bottom: 15px; }
            .menu-title { font-size: 18px; font-weight: bold; color: #333; margin-bottom: 10px; }
            .menu-desc { color: #666; font-size: 14px; }
            .back-btn { position: fixed; top: 20px; left: 20px; padding: 10px 20px; background: #ff6b6b; color: white; border: none; border-radius: 5px; cursor: pointer; }
            .warning { background: #fff3cd; color: #856404; padding: 15px; border-radius: 5px; margin-bottom: 20px; border-left: 4px solid #ffc107; }
        </style>
    </head>
    <body>
        <button class="back-btn" onclick="window.location.href='index.html'">← 返回登录</button>
        <div class="dashboard">
            <div class="header">
                <div class="welcome">🔧 BookHub 管理端</div>
                <div>管理员仪表板</div>
            </div>
            <div class="warning">
                <strong>⚠️ 测试账号：</strong>用户名 admin，密码 123456<br>
                此为演示版本，实际功能需要后端支持
            </div>
            <div class="nav-menu">
                <div class="menu-card" onclick="alert('用户管理功能：审核注册、处理违规账号、管理用户权限')">
                    <div class="menu-icon">👥</div>
                    <div class="menu-title">用户管理</div>
                    <div class="menu-desc">审核用户注册，处理违规账号，管理用户权限</div>
                </div>
                <div class="menu-card" onclick="alert('图书审核功能：监管二手书信息、审核交流内容、过滤敏感词')">
                    <div class="menu-icon">📖</div>
                    <div class="menu-title">图书审核</div>
                    <div class="menu-desc">监管二手书信息，审核用户发布的交流内容</div>
                </div>
                <div class="menu-card" onclick="alert('交易管理功能：处理纠纷、统计数据、监控交易状态')">
                    <div class="menu-icon">💰</div>
                    <div class="menu-title">交易管理</div>
                    <div class="menu-desc">处理交易纠纷，统计平台交易数据</div>
                </div>
            </div>
        </div>
    </body>
    </html>
    `;
    
    const newWindow = window.open('', '_blank', 'width=1000,height=700');
    newWindow.document.write(adminDashboard);
    newWindow.document.close();
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('BookHub 图书管理交流购买平台已加载');
});

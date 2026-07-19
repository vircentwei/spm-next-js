# SANPiMA Contact API（Express + MySQL，前后端分离）

留言表单后端：接收前端 Contact 表单提交，写入服务器 MySQL（strapi_db）的 `contact_messages` 表。

## 部署（在服务器 43.165.125.95 上运行）
```bash
cd api
cp .env.example .env      # 填入真实数据库密码
npm install
npm run init-db           # 自动建 contact_messages 表（幂等，可重复执行）
npm start                 # 默认端口 3001
```
建议用 pm2 常驻：`pm2 start server.js --name contact-api`

## 配置（.env）
| 变量 | 说明 | 默认 |
|---|---|---|
| PORT | 服务端口 | 3001 |
| DB_HOST / DB_PORT | MySQL 地址 | 127.0.0.1:3306 |
| DB_NAME / DB_USER / DB_PASSWORD | 数据库、用户名、密码 | strapi_db / strapi_user |
| CORS_ORIGINS | 允许的跨域来源（逗号分隔，或 `*`） | * |

## 接口
- `POST /api/contact`：JSON `{email,name,phone,title,content,page,time}`，必填 email/name/title/content，成功返回 `{ok:true,id}`
- `GET /api/contact?limit=50`：查看最近留言（后续可加鉴权）
- `GET /api/health`：健康检查（含数据库连通性）

## 前端配置
前端表单提交地址由 `window.DZ_CONTACT_API` 控制，默认 `/api/contact`。
部署后在 index.html / contact-us.html 顶部设置：
```html
<script>window.DZ_CONTACT_API='https://你的接口域名/api/contact';</script>
```

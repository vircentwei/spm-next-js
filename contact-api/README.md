# SANPiMA Contact API（独立后端，前后端分离）

## 运行
```
node server.js        # 默认端口 3001
```

## 接口
- `POST /api/contact`：接收首页留言表单，JSON 格式 `{email,name,phone,title,content,page,time}`，必填 email/name/title/content，成功返回 `{ok:true}`，留言追加保存到 `messages.json`。
- `GET /api/contact`：查看已收到的留言列表（后续可加鉴权）。

## 前端配置
首页 `index.html` 里表单提交地址由 `window.DZ_CONTACT_API` 控制，默认 `/api/contact`。
本地联调时在 index.html 前面加：
```html
<script>window.DZ_CONTACT_API='http://localhost:3001/api/contact';</script>
```
部署后改成正式接口地址即可。后续做正式接口（发邮件等）时只需替换这个后端实现，前端不用动。

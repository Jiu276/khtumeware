# KhtumeWare 部署指南（Ubuntu 24.04 + Cloudflare）

服务器配置参考：
- **公网 IP**: `198.11.177.116`
- **系统**: Ubuntu 24.04
- **规格**: 2 vCPU / 4GB RAM / 50GB ESSD
- **DNS**: Namecheap 域名 → Cloudflare（橙色云代理）

---

## 1. Cloudflare DNS

| Type | Name | Content | Proxy |
|------|------|---------|-------|
| A | `@` | `198.11.177.116` | Proxied |
| A | `www` | `198.11.177.116` | Proxied |

SSL/TLS → **Full (strict)**（源站证书就绪后）  
开启 **Always Use HTTPS**

**Cache Rules 建议 Bypass：**

- `/checkout*`
- `/cart*`
- `/api/*`

---

## 2. 服务器初始化

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nginx certbot python3-certbot-nginx ufw
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

---

## 3. 安装 Node.js 22

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs
```

---

## 4. 构建项目

```bash
sudo mkdir -p /var/www/khtumeware
sudo chown -R $USER:$USER /var/www/khtumeware
cd /var/www/khtumeware
npm ci
npm run build
```

---

## 5. PM2 运行

```bash
sudo npm install -g pm2
pm2 start npm --name khtumeware -- start
pm2 save
pm2 startup
```

---

## 6. Nginx 反向代理 + SSL

见项目内 Nginx 配置示例，使用 certbot 申请 Let's Encrypt 证书。

Cloudflare SSL 模式：**Full (strict)**

---

## 本地预览

```bash
npm run dev
```

访问 http://localhost:3000

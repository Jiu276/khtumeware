# KhtumeWare — 五金外贸独立站

对标 [Amerdeco](https://amerdeco.com/) 风格的 B2B + B2C 橱柜五金独立站，基于 `Khtumeware_Full_Tag_System_For_Developer.docx` 完整标签体系。

## 本地运行

```bash
npm install
npm run dev
```

打开 http://localhost:3000

## 主要页面

| 路径 | 功能 |
|------|------|
| `/` | 首页：Hero、热销、按 Finish/分类、品牌故事、评价 |
| `/shop` | 商品列表 + 多维筛选（Finish/Material/Style/Room） |
| `/collections/cabinet-pulls/matte-black` | SEO 分类集合页 |
| `/products/design3768-contemporary-cabinet-handles` | 产品详情 + 颜色 Swatch |
| `/cart` | 购物车 |
| `/checkout` | B2B/B2C 结账 |
| `/about` `/contact` | 品牌与询盘 |

## 标签体系

见根目录 `Khtumeware_Full_Tag_System_For_Developer.docx`：
- 6 大一级分类 + 完整子分类
- Finish / Size / Style / Material / Shape / Function / Room 标签
- SKU 规范：`KH-PULL-128-MB` 等

## 部署

Ubuntu 24.04 + Cloudflare + Nginx + PM2，详见 [DEPLOY.md](./DEPLOY.md)。

## 素材

产品场景图使用 [Unsplash](https://unsplash.com)（可商用），关键词见 `免费高清素材.docx`。

## 下一步

- [ ] 接入 Stripe / PayPal
- [ ] 后台 CMS 或 WooCommerce 同步
- [ ] 批量 CSV 导入商品

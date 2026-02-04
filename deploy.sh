#!/bin/bash

# 数学内容增强版本部署脚本
# 版本: v2.0 - 包含17个高质量知识点

echo "🚀 开始部署数学内容增强版本..."

# 1. 构建Docker镜像
echo "📦 构建Docker镜像..."
docker build -t homework-ai:v2.0 .

# 2. 停止旧容器
echo "🛑 停止旧容器..."
docker stop homework-ai 2>/dev/null || true
docker rm homework-ai 2>/dev/null || true

# 3. 启动新容器
echo "▶️  启动新容器..."
docker run -d \
  --name homework-ai \
  -p 80:80 \
  --restart unless-stopped \
  homework-ai:v2.0

# 4. 检查容器状态
echo "✅ 检查容器状态..."
docker ps | grep homework-ai

echo ""
echo "🎉 部署完成!"
echo "📊 版本信息:"
echo "   - 知识点: 17/23 (74%)"
echo "   - AI对话: 120条"
echo "   - 例题: 39个"
echo "   - 练习题: 38个"
echo ""
echo "🌐 访问地址: http://your-server-ip"
echo ""

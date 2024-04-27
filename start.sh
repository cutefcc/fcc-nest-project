#!/bin/bash

set -e
echo "开始启动服务"

pm2-runtime start ecosystem.config.js --env production

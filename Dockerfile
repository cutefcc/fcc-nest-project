# 使用官方的Node.js镜像作为基础镜像
FROM node:lts-alpine as builder

# 设置工作目录
WORKDIR /app

# 将应用程序代码复制到工作目录
COPY . .

RUN npm install -g pnpm pm2
RUN pnpm install --frozen-lockfile

RUN pnpm run build

# 使用pm2启动应用程序
CMD ["sh", "start.sh"]

# 暴露应用程序端口
EXPOSE 3001

#############################
# FROM node:lts-alpine as builder

# # Create app directory
# WORKDIR /app

# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# COPY package*.json ./

# # Install app dependencies
# RUN npm install -g pnpm pm2
# RUN pnpm install

# COPY . .

# RUN pnpm run build

# FROM node:lts-alpine

# WORKDIR /app

# COPY --from=builder /app/node_modules ./node_modules
# COPY --from=builder /app/package*.json ./
# COPY --from=builder /app/dist ./dist

# EXPOSE 3001
# CMD [ "npm", "run", "start:prod" ]
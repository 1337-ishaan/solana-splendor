# Usar una imagen oficial de Node.js como imagen base
FROM node:16 as builder

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json (si está disponible)
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el código fuente del proyecto al contenedor
COPY . .

# Construir el proyecto
RUN npm run build

# Fase de producción: Usar una imagen ligera de Node.js
FROM node:16-slim

WORKDIR /app

# Copiar las dependencias y el código construido desde la fase de construcción
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Exponer el puerto que utiliza Next.js (por defecto es el 3000)
EXPOSE 3000

# Comando para ejecutar el servidor de Next.js
CMD ["npm", "start"]

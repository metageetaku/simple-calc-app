FROM node:18-alpine

WORKDIR /app

# Copie des fichiers de dépendances
COPY package*.json ./

# Installation des dépendances de production uniquement
RUN npm ci --only=production

# Copie du code source
COPY src/ ./src/

# Commande par défaut
CMD ["node", "-e", "const Calculator = require('./src/calculator'); const calc = new Calculator(); console.log('Calculator app ready! Test: 2 + 3 =', calc.add(2, 3));"]

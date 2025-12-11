# Simple Calculator App - CI/CD avec GitHub Actions

![CI/CD Status](https://github.com/votre-username/simple-calc-app/workflows/CI%2FCD%20Pipeline/badge.svg)

## 📋 Description

Application de calculatrice simple en Node.js utilisée pour démontrer une pipeline CI/CD complète avec GitHub Actions.

## 🚀 Fonctionnalités

- ➕ Addition
- ➖ Soustraction
- ✖️ Multiplication
- ➗ Division (avec gestion de la division par zéro)

## 🛠️ Technologies utilisées

- **Node.js 18** - Runtime JavaScript
- **Jest** - Framework de tests
- **Docker** - Containerisation
- **GitHub Actions** - CI/CD

## 📦 Pipeline CI/CD

La pipeline comprend 3 étapes principales :

1. **Build** - Installation et mise en cache des dépendances
2. **Test** - Exécution des tests unitaires avec couverture de code
3. **Docker** - Build et déploiement sur Docker Hub (uniquement si tests OK)

## 🏃 Utilisation en local

### Prérequis

- Node.js 18+
- npm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/votre-username/simple-calc-app.git
cd simple-calc-app

# Installer les dépendances
npm install

# Lancer les tests
npm test

# Build Docker (optionnel)
docker build -t simple-calc-app .
docker run simple-calc-app
```

## 🔧 Configuration GitHub Actions

### Secrets requis

Dans **Settings → Secrets and variables → Actions**, créer :

- `DOCKER_USERNAME` : Nom d'utilisateur Docker Hub
- `DOCKER_PASSWORD` : Token d'accès Docker Hub

### Variables à modifier

Dans `.github/workflows/ci-cd.yml`, modifier :

```yaml
env:
  DOCKER_IMAGE_NAME: votre-username/simple-calc-app
```

## 📚 Structure du projet

```
simple-calc-app/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # Pipeline CI/CD
├── src/
│   └── calculator.js          # Code source
├── tests/
│   └── calculator.test.js     # Tests unitaires
├── Dockerfile                 # Configuration Docker
├── package.json               # Dépendances
└── README.md
```

## 🧪 Tests

Les tests couvrent toutes les opérations de la calculatrice :

```bash
npm test
```

Couverture de code minimale requise : 80%

## 🐳 Docker

### Build manuel

```bash
docker build -t simple-calc-app .
```

### Run manuel

```bash
docker run simple-calc-app
```

### Pull depuis Docker Hub

```bash
docker pull votre-username/simple-calc-app:latest
```

## 📝 Licence

MIT

## 👤 Auteur

Votre Nom

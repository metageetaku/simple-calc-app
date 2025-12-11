# TP : Pipeline CI/CD complète avec GitHub Actions

## Objectifs pédagogiques

À l'issue de ce TP, vous serez capable de :

- Créer une pipeline CI/CD complète avec GitHub Actions
- Gérer efficacement le cache des dépendances npm
- Orchestrer plusieurs jobs avec des dépendances
- Exécuter des tests automatisés dans la pipeline
- Déployer automatiquement une image Docker sur Docker Hub
- Utiliser des conditions d'exécution dans les workflows

### Outils nécessaires

- Un compte GitHub
- Un compte Docker Hub (gratuit)
- Node.js 18+ (pour tests en local)

## Structure du projet fourni

```
simple-calc-app/
├── .github/
│   └── workflows/
│       └── ci-cd.yml          # Pipeline
├── src/
│   └── calculator.js
├── tests/
│   └── calculator.test.js     # Tests unitaires avec Jest
├── .dockerignore
├── .gitignore
├── Dockerfile
├── jest.config.js
├── package.json
└── README.md
```

## Préparation

### 1. Créer un dépôt GitHub

### Variables d'environnement globales à définir

```yaml
env:
  NODE_VERSION: "18"
  DOCKER_IMAGE_NAME: votre-username-dockerhub/simple-calc-app
```

### Job 1 : Build et Installation

**Nom du job :** `build`

**Objectif :** Installer les dépendances (avec cache) et effectuer un build de l'application

**Déclencheurs du workflow :**

- Push sur les branches `main` et `develop`
- Pull request vers la branche `main`

### Job 2 : Tests

**Nom du job :** `test`

**Dépendances :** Ce job doit s'exécuter **après** le job `build`

**Objectif :** Exécuter les tests unitaires et générer un rapport de couverture

Exécution des tests avec `npm test`
Upload du rapport de couverture

- Nom de l'artefact : `coverage-report`
- Chemin : `coverage/`
- Rétention : 7 jours

### Job 3 : Docker Build & Push

**Nom du job :** `docker`

**Dépendances :** Ce job doit s'exécuter **après** le job `test`

**Condition d'exécution :** Uniquement si :

- L'événement est un `push`
- La branche est `main`

**Objectif :** Construire l'image Docker et la pousser sur Docker Hub

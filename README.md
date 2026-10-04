# SDLC Sample Node

Application Node.js minimale, sans dépendance, qui sert à éprouver le [SDLC Blueprint](https://github.com/Palo-IT-Labs/sdlc-blueprint) sur une seconde stack et à tester la **PR d'amorçage**.

Ce repo ne contient volontairement **aucun fichier SDLC** au départ : c'est la PR d'amorçage qui doit les ajouter.

## Lancer en local

Prérequis : Node.js 20 ou plus récent.

```bash
npm test     # tests, avec un rapport JUnit dans test-results/
npm start    # démarre l'API sur le port 3000
curl "http://localhost:3000/api/hello?name=Kham"
curl http://localhost:3000/health
```

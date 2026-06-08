# Gabon HubTech API

Backend API pour la plateforme Gabon HubTech, gérant les contacts, les événements et les formations.

## Technologies
- Node.js
- Express
- MongoDB (Mongoose)

## Installation

1. Cloner le repo : `git clone <url>`
2. Installer les dépendances : `npm install`
3. Configurer les variables d'environnement (`.env`) :
   - `MONGODB_URI`
   - `RESEND_API_KEY`
   - `RECEIVER_EMAIL`
   - `FRONTEND_URL`
4. Lancer le serveur : `npm start`

## Routes API

- `POST /api/contact` : Soumission de formulaire
- `GET /api/events` : Liste des événements
- `POST /api/events` : Créer un événement
- `PUT /api/events/:id` : Modifier un événement
- `DELETE /api/events/:id` : Supprimer un événement
- `GET /api/formations` : Liste des formations
- `POST /api/formations` : Créer une formation
- `PUT /api/formations/:id` : Modifier une formation
- `DELETE /api/formations/:id` : Supprimer une formation

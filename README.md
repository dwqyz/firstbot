Voici un exemple de fichier README pour votre projet :

---

# Wildya First Bot

Ce script a été développé pour automatiser l'envoi d'un message "first" à une heure précise sur un serveur Discord. Sur le serveur Wildya, chaque jour à 00h00, les joueurs s'amusent à être les premiers à écrire "first". Ce bot vous permettra de toujours être le premier à écrire "first".

## Installation

### Prérequis

- Node.js doit être installé sur votre machine. Vous pouvez le télécharger et l'installer depuis [nodejs.org](https://nodejs.org/).

### Étapes d'installation

1. Clonez ce dépôt ou téléchargez les fichiers nécessaires.

2. Accédez au répertoire du projet :
   ```bash
   cd firstbot
   ```

3. Installez les dépendances requises :
   ```bash
   npm install discord.js-selfbot-v13 moment-timezone node-cron
   ```

4. Configurez le token, l'heure et les informations du serveur :
   - Dans le répertoire `config`, créez un fichier `token.js` et un fichier `config.js` si ce n'est pas déjà fait.

   - **config/token.js** :
     ```javascript
     // config/token.js
     module.exports = {
       token: 'VOTRE_TOKEN_UTILISATEUR_DISCORD_ICI'
     };
     ```

   - **config/config.js** :
     ```javascript
     // config/config.js
     module.exports = {
       heure: 'HH:MM:SS', // UTC+2
       message: 'first',
       guildId: 'ID_DE_LA_GUILDE_ICI',
       channelId: 'ID_DU_CHANNEL_ICI'
     };
     ```

5. Lancez le script :
   ```bash
   node app.js
   ```

## Explication du Script

- **Objet** : Le script se connecte à votre compte Discord en utilisant le token fourni. Il utilise la bibliothèque `node-cron` pour planifier l'envoi du message "first" à l'heure spécifiée (00:00:00 chaque jour).
- **Fonctionnalité** : Une fois connecté, le script attend l'heure configurée et envoie automatiquement le message dans le canal spécifié de la guilde.

## Avertissement

L'utilisation de self-bots est contre les termes de service de Discord. Les risques incluent, mais ne sont pas limités à :
- Suspension de votre compte
- Bannissement de votre compte

Utilisez ce script à vos risques et périls. Il est recommandé de ne pas utiliser de self-bots pour éviter tout risque de suspension ou de bannissement de votre compte Discord.

---

En suivant ce guide, vous devriez être en mesure d'installer et d'utiliser le script pour envoyer automatiquement le message "first" sur le serveur Discord Wildya chaque jour à 00h00. Soyez conscient des risques et utilisez ce script de manière responsable.

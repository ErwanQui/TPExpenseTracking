# TPExpenseTracking

Pour lancer le projet, récupérer le repo git, puis au niveau du chemin du dossier faites les commandes :
`npm install`, puis `ng serve`

Aller ensuite à `http://localhost:4200/` pour utiliser l'app

## Fonctionnalités

L'application permet d'accéder à une liste de dépenses classées par ordre chronologique inverse de dates.

Une estimation du total qui sera dépensé lors du mois en cours est proposé au-dessus, calculé en multipliant le total déjà dépensé par le rapport du nombre de jours du mois sur le nombre de jours écoulé.

L'utilisateur peut aussi ajouter une nouvelle dépense en cliquant sur le bouton dédié. Seuls les 4 premiers champs sont obligatoires, les autres sont facultatifs. Le champ intitulé ne peut pas contenir de "'". En validantn, une snackbar apparait pour informer l'utilisteur de la réussite ou non, de l'opération. Les données sont instantannément mises à jour.

En outre, un deuxième onglet permet d'accéder à la répartition des dépenses par catégorie sous forme de graphique en barre.
(Pour ce graphique, j'ai utilisé chart.js avec ng2-chart, pour que ce soit cohérent avec l'infrastructure d'angular)

## Autres

Le code des fonctions back est disponible [ici](https://github.com/ErwanQui/TPExpenseTrackingServer)

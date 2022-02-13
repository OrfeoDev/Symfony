Symfony est agnostique , il nous force a rien.
DOCTRINE: Est un ensemble de librairie qui represente un ORM ( Object Relationnal Mapper) c'c'est une brique logiciel qui se placer entre mon application et ma base donnée qui va faire la correspondance entre les tables,enregistrement et les classes et objects.

Entite : C'est un objet qui representer un enregistrement de de ma base de donnee.
Exemple: un produit chaise en bois a 22.50euros, on y trouve un ID,NOM,PRIX ...

REPOSITORY: Permet de selectionner des enrengistrement dans les tables.
Exemple: je veux selctionner tous les produits qui sont superieures a 22.50euros..

Manager: Permet de manipuler,modifier,supprimer  les objects
Exemples : si je veux supprimer un objet
$manager->remove($produits);
$manager ->flush()


Pour faire des requete a la base de donnee, il est possible de le faire du SQL Mais aussi avec du DQL =FROM App\Entity\produit As p WHERE p.price >10.



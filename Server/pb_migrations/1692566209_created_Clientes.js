/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8xg6s3meemue297",
    "created": "2023-08-20 21:16:49.537Z",
    "updated": "2023-08-20 21:16:49.537Z",
    "name": "Clientes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ibwzcwz2",
        "name": "RazonSocial",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "uow2zan2",
        "name": "Cuit",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "1tfvnkwx",
        "name": "Domicilio",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297");

  return dao.deleteCollection(collection);
})

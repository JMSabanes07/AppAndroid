/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ktwa2eh1egsn8qx",
    "created": "2023-08-20 21:33:53.388Z",
    "updated": "2023-08-20 21:33:53.388Z",
    "name": "Paices",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1z2xspuo",
        "name": "Nombre",
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
        "id": "3jvjvneu",
        "name": "CodigoInternoAfip",
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
  const collection = dao.findCollectionByNameOrId("ktwa2eh1egsn8qx");

  return dao.deleteCollection(collection);
})

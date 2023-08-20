/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ajn8gfj7vtqp5d2",
    "created": "2023-08-20 21:34:39.314Z",
    "updated": "2023-08-20 21:34:39.314Z",
    "name": "Provincias",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ssaephh2",
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
        "id": "ehdb0xkx",
        "name": "idPais",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ktwa2eh1egsn8qx",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
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
  const collection = dao.findCollectionByNameOrId("ajn8gfj7vtqp5d2");

  return dao.deleteCollection(collection);
})

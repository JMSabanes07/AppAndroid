/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "m6efb717dh86ume",
    "created": "2023-08-20 21:43:08.281Z",
    "updated": "2023-08-20 21:43:08.281Z",
    "name": "Zonas",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "lk7bqz06",
        "name": "Descripcion",
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
        "id": "7l9b9qcu",
        "name": "Estado",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("m6efb717dh86ume");

  return dao.deleteCollection(collection);
})

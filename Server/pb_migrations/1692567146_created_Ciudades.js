/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1p1tl8a19w3c2uj",
    "created": "2023-08-20 21:32:26.149Z",
    "updated": "2023-08-20 21:32:26.149Z",
    "name": "Ciudades",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "h7trcg2d",
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
        "id": "ic8x32ff",
        "name": "CodigoPostal",
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
  const collection = dao.findCollectionByNameOrId("1p1tl8a19w3c2uj");

  return dao.deleteCollection(collection);
})

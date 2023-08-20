/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "5goz9zuznudd7gh",
    "created": "2023-08-20 20:21:33.025Z",
    "updated": "2023-08-20 20:21:33.025Z",
    "name": "TipoAcoplado",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "1uvufjz9",
        "name": "idTipoAcoplado",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "xfu9ykls",
        "name": "TA_Descripcion",
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
  const collection = dao.findCollectionByNameOrId("5goz9zuznudd7gh");

  return dao.deleteCollection(collection);
})

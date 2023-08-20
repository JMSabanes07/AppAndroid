/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ofy6z3dju6sg1qs",
    "created": "2023-08-20 21:12:19.005Z",
    "updated": "2023-08-20 21:12:19.005Z",
    "name": "TipoCarga",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wrnn9y86",
        "name": "Descripcion",
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
  const collection = dao.findCollectionByNameOrId("ofy6z3dju6sg1qs");

  return dao.deleteCollection(collection);
})

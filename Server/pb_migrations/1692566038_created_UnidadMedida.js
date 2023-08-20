/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "n29z7826gmxz389",
    "created": "2023-08-20 21:13:58.644Z",
    "updated": "2023-08-20 21:13:58.644Z",
    "name": "UnidadMedida",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uxbn9tbp",
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
        "id": "xynjsvsa",
        "name": "Nomenclatura",
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
        "id": "dznin5dv",
        "name": "CodigoInternoAfip",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
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
  const collection = dao.findCollectionByNameOrId("n29z7826gmxz389");

  return dao.deleteCollection(collection);
})

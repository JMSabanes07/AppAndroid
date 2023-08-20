/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "1u5gjm2zv0j7ozc",
    "created": "2023-08-20 21:14:36.466Z",
    "updated": "2023-08-20 21:14:36.466Z",
    "name": "Productos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jfpuvlu3",
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
        "id": "9hkdw3kn",
        "name": "UnidadMedida",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "n29z7826gmxz389",
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
  const collection = dao.findCollectionByNameOrId("1u5gjm2zv0j7ozc");

  return dao.deleteCollection(collection);
})

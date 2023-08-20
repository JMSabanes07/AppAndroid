/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2ye1z1fw1xsqzkr",
    "created": "2023-08-20 21:15:34.593Z",
    "updated": "2023-08-20 21:15:34.593Z",
    "name": "CondicionDePago",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ny0babpw",
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
        "id": "hyuqyio7",
        "name": "PlazoEnDias",
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
        "id": "kmeupma1",
        "name": "PlazoEnDiasLiquidacion",
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
  const collection = dao.findCollectionByNameOrId("2ye1z1fw1xsqzkr");

  return dao.deleteCollection(collection);
})

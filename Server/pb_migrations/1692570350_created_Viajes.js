/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "od4q8f8nefiab2w",
    "created": "2023-08-20 22:25:50.777Z",
    "updated": "2023-08-20 22:25:50.777Z",
    "name": "Viajes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wdhbokhj",
        "name": "TipoCarga",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "ofy6z3dju6sg1qs",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "qyqqxb6q",
        "name": "Producto",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "1u5gjm2zv0j7ozc",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "6tsozho8",
        "name": "CantidadPeso",
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
        "id": "v8pc4c9x",
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
      },
      {
        "system": false,
        "id": "29wvolz0",
        "name": "Origen",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "1p1tl8a19w3c2uj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "kyxu1plb",
        "name": "Destino",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "1p1tl8a19w3c2uj",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "3xexjy9g",
        "name": "Tarifa",
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
        "id": "ycffqici",
        "name": "FechaHoraCarga",
        "type": "date",
        "required": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "mbfz7aya",
        "name": "CantidadCupos",
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
        "id": "zkvjizbx",
        "name": "CantidadReservaCupos",
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
        "id": "rwjdqi1f",
        "name": "TitularCarga",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "8xg6s3meemue297",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "3dbujvkk",
        "name": "Comentarios",
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
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w");

  return dao.deleteCollection(collection);
})

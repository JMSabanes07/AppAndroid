/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "il88k5qu",
    "name": "VendedorUsuario",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4vptbiiy",
    "name": "CondicionDePago",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2ye1z1fw1xsqzkr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dbqcr6lx",
    "name": "Observaciones",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wtcehrsk",
    "name": "Estado",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cteob2ix",
    "name": "IdZona",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "m6efb717dh86ume",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // remove
  collection.schema.removeField("il88k5qu")

  // remove
  collection.schema.removeField("4vptbiiy")

  // remove
  collection.schema.removeField("dbqcr6lx")

  // remove
  collection.schema.removeField("wtcehrsk")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cteob2ix",
    "name": "IdZona",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "m6efb717dh86ume",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})

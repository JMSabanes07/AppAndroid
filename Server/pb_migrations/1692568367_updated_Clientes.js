/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // remove
  collection.schema.removeField("cteob2ix")

  return dao.saveCollection(collection)
})

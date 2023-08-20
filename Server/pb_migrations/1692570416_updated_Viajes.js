/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f6vzpkh1",
    "name": "CondicionesEspeciales",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2w3i5st8k35qfgc",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("od4q8f8nefiab2w")

  // remove
  collection.schema.removeField("f6vzpkh1")

  return dao.saveCollection(collection)
})

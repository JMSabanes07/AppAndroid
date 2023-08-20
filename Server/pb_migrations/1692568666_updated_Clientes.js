/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("8xg6s3meemue297")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pwpn8wdk",
    "name": "CondicionFiscal",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "l45uz0v2z99ga6n",
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
  collection.schema.removeField("pwpn8wdk")

  return dao.saveCollection(collection)
})

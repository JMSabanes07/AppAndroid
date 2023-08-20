/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ktwa2eh1egsn8qx")

  collection.name = "Paises"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ktwa2eh1egsn8qx")

  collection.name = "Paices"

  return dao.saveCollection(collection)
})

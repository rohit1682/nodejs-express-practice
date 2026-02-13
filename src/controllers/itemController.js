const itemService = require('../services/itemService');

async function getItems(req, res, next) {
  try {
    const items = await itemService.getAllItems();
    res.json(items);
  } catch (err) {
    next(err);
  }
}

async function getItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    const item = await itemService.getItemById(id);
    res.json(item);
  } catch (err) {
    next(err);
  }
}

async function createItem(req, res, next) {
  try {
    const created = await itemService.createItem(req.body);
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

async function updateItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    const updated = await itemService.updateItem(id, req.body);
    res.json(updated);
  } catch (err) {
    next(err);
  }
}

async function deleteItem(req, res, next) {
  try {
    const id = Number(req.params.id);
    await itemService.deleteItem(id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};


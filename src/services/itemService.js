const itemRepository = require('../repositories/itemRepository');

function getAllItems() {
  return itemRepository.findAll();
}

function getItemById(id) {
  const item = itemRepository.findById(id);
  if (!item) {
    const error = new Error('Item not found');
    error.status = 404;
    throw error;
  }
  return item;
}

function createItem(data) {
  return itemRepository.create(data);
}

function updateItem(id, data) {
  const updated = itemRepository.update(id, data);
  if (!updated) {
    const error = new Error('Item not found');
    error.status = 404;
    throw error;
  }
  return updated;
}

function deleteItem(id) {
  const deleted = itemRepository.remove(id);
  if (!deleted) {
    const error = new Error('Item not found');
    error.status = 404;
    throw error;
  }
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};


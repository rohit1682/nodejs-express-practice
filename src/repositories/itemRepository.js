// Simple in-memory repository for items
// Each item: { id: number, name: string, description?: string }

let items = [];
let nextId = 1;

function findAll() {
  return items;
}

function findById(id) {
  return items.find((item) => item.id === id);
}

function create(data) {
  const newItem = {
    id: nextId++,
    name: data.name,
    description: data.description ?? '',
  };
  items.push(newItem);
  return newItem;
}

function update(id, data) {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return null;

  items[index] = {
    ...items[index],
    name: data.name ?? items[index].name,
    description: data.description ?? items[index].description,
  };

  return items[index];
}

function remove(id) {
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  return true;
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};


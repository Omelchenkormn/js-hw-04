const inventory = { // создали объект инвентаря 
  items: ['Knife', 'Gas mask'], // содержимое 
  add(itemName) {  // функция добавления инвентаря
    console.log(`Adding ${itemName} to inventory`); // выводим сообщение о добавлении 

    this.items.push(itemName);    // добавляем инвентарь
  },
  remove(itemName) {   // функция удаления инв 
    console.log(`Removing ${itemName} from inventory`); // сообщение об удалении позиции

    this.items = this.items.filter(item => item !== itemName);  // 
  },
};

const invokeInventoryAction = function(itemName, action) { // создание функции действия инвентаризации
  console.log(`Invoking action on ${itemName}`);
  action.call(this, itemName); 
};

invokeInventoryAction.call(inventory, 'Medkit', inventory.add); 
// Invoking action on Medkit
// Adding Medkit to inventory

console.log(inventory.items); // ['Knife', 'Gas mask', 'Medkit']

invokeInventoryAction.call(inventory, 'Gas mask', inventory.remove);
// Invoking action on Gas mask
// Removing Gas mask from inventory

console.log(inventory.items); // ['Knife', 'Medkit']



    

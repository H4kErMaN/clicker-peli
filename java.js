let pizzas = 0;
let ovens = {
  small: { count: 0, cost: 10, rate: 1 },
  big: { count: 0, cost: 100, rate: 10 },
  factory: { count: 0, cost: 1000, rate: 100 },
  world: { count: 0, cost: 10000, rate: 1000 }
};

const counter = document.getElementById("counter");
const pizza = document.getElementById("pizza");

const upgrade1 = document.getElementById("upgrade1");
const upgrade2 = document.getElementById("upgrade2");
const upgrade3 = document.getElementById("upgrade3");
const upgrade4 = document.getElementById("upgrade4");

pizza.addEventListener("click", () => {
  pizzas++;
  updateCounter();
});

upgrade1.addEventListener("click", () => buyOven("small"));
upgrade2.addEventListener("click", () => buyOven("big"));
upgrade3.addEventListener("click", () => buyOven("factory"));
upgrade4.addEventListener("click", () => buyOven("world"));

function buyOven(type) {
  if (pizzas >= ovens[type].cost) {
    pizzas -= ovens[type].cost;
    ovens[type].count++;
    ovens[type].cost = Math.floor(ovens[type].cost * 1.5); // hinta pitäis kasvaa jos toimii oikein(jos)
    updateButtons();
    updateCounter();
  }
}

function updateCounter() {
  counter.textContent = pizzas;
}

function updateButtons() {
  upgrade1.textContent = `Pieni uuni (${ovens.small.cost} pitsaa, omistat ${ovens.small.count})`;
  upgrade2.textContent = `Iso uuni (${ovens.big.cost} pitsaa, omistat ${ovens.big.count})`;
  upgrade3.textContent = `Pizzatehdas (${ovens.factory.cost} pitsaa, omistat ${ovens.factory.count})`;
  upgrade4.textContent = `Pizzamaailma (${ovens.world.cost} pitsaa, omistat ${ovens.world.count})`;
}

// Automaattisesti tulevat pitsat jos toimii
setInterval(() => {
  let income = 
    ovens.small.count * ovens.small.rate +
    ovens.big.count * ovens.big.rate +
    ovens.factory.count * ovens.factory.rate +
    ovens.world.count * ovens.world.rate;

  pizzas += income;
  updateCounter();
}, 1000);

updateButtons();

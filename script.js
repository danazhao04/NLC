const menuData = [
  {
    category: "Appetizers",
    items: [
      { name: "Pork Egg Roll (1)", price: "$2.25" },
      { name: "Vegetable Spring Roll (2)", price: "$4.95" },
      { name: "Crab Rangoon (8)", price: "$7.95" },
      { name: "Fried Dumplings (8)", price: "$8.95" },
      { name: "Steamed Dumplings (8)", price: "$8.95" }
    ]
  },
  {
    category: "Soup",
    items: [
      { name: "Wonton Soup", price: "$4.25" },
      { name: "Egg Drop Soup", price: "$3.95" },
      { name: "Hot & Sour Soup", price: "$4.50" },
      { name: "House Special Soup", price: "$8.95" }
    ]
  },
  {
    category: "Fried Rice",
    items: [
      { name: "Vegetable Fried Rice", price: "$9.95" },
      { name: "Chicken Fried Rice", price: "$10.95" },
      { name: "Pork Fried Rice", price: "$10.95" },
      { name: "Shrimp Fried Rice", price: "$12.95" },
      { name: "House Special Fried Rice", price: "$12.95" }
    ]
  },
  {
    category: "Lo Mein",
    items: [
      { name: "Vegetable Lo Mein", price: "$10.50" },
      { name: "Chicken Lo Mein", price: "$11.95" },
      { name: "Pork Lo Mein", price: "$11.95" },
      { name: "Beef Lo Mein", price: "$12.95" },
      { name: "Shrimp Lo Mein", price: "$13.95" }
    ]
  },
  {
    category: "Chef's Specials",
    items: [
      { name: "General Tso's Chicken", price: "$14.95" },
      { name: "Sesame Chicken", price: "$14.95" },
      { name: "Orange Chicken", price: "$14.95" },
      { name: "Beef with Broccoli", price: "$15.50" },
      { name: "Shrimp with Garlic Sauce", price: "$16.50" }
    ]
  },
  {
    category: "Combination Platters",
    items: [
      { name: "Sweet & Sour Chicken Combo", price: "$13.95" },
      { name: "Chicken with Broccoli Combo", price: "$13.95" },
      { name: "Pepper Steak Combo", price: "$14.95" },
      { name: "Shrimp with Mixed Vegetables Combo", price: "$15.95" }
    ]
  }
];

function renderMenu() {
  const menuGrid = document.querySelector("#menu-grid");
  if (!menuGrid) return;

  menuGrid.innerHTML = menuData
    .map((section) => {
      const items = section.items
        .map(
          (item) => `
            <li class="menu-item">
              <span class="menu-item-name">${item.name}</span>
              <span class="menu-item-price">${item.price}</span>
            </li>
          `
        )
        .join("");

      return `
        <article class="menu-category">
          <h3>${section.category}</h3>
          <ul class="menu-list">${items}</ul>
        </article>
      `;
    })
    .join("");
}

document.addEventListener("DOMContentLoaded", renderMenu);

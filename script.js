const menuData = [
  {
    category: "Special Dishes",
    specialTable: {
      columns: [
        { key: "plain", label: "No Sides" },
        { key: "fries", label: "w. French<br>Fries" },
        {
          key: "plainVegetableFR",
          label: "w. Plain or Vegetable<br>Fried Rice",
        },
        { key: "porkChickenFR", label: "w. Pork or Chicken<br>Fried Rice" },
        { key: "beefShrimpFR", label: "w. Beef or Shrimp<br>Fried Rice" },
        { key: "porkChickenLM", label: "w. Pork or Chicken<br>Lo Mein" },
        { key: "beefShrimpLM", label: "w. Beef or Shrimp<br>Lo Mein" },
        {
          key: "houseSpecialFRorLM",
          label: "w. House Special<br>Fried Rice or Lo Mein",
        },
      ],
      rows: [
        {
          dish: "(A) Chicken Wings",
          prices: {
            plain: "$7.25",
            fries: "$9.25",
            plainVegetableFR: "$9.25",
            porkChickenFR: "$9.25",
            beefShrimpFR: "$9.75",
            porkChickenLM: "$11.95",
            beefShrimpLM: "$12.25",
            houseSpecialFRorLM: "$12.75",
          },
        },
        {
          dish: "(B) Chicken Gizzards",
          prices: {
            plain: "$7.25",
            fries: "$9.25",
            plainVegetableFR: "$9.25",
            porkChickenFR: "$9.25",
            beefShrimpFR: "$9.75",
            porkChickenLM: "$11.95",
            beefShrimpLM: "$12.25",
            houseSpecialFRorLM: "$12.75",
          },
        },
        {
          dish: "(C) Rib Tips",
          prices: {
            plain: "$7.25",
            fries: "$9.25",
            plainVegetableFR: "$9.25",
            porkChickenFR: "$9.25",
            beefShrimpFR: "$9.75",
            porkChickenLM: "$11.95",
            beefShrimpLM: "$12.25",
            houseSpecialFRorLM: "$12.75",
          },
        },
        {
          dish: "(D) Fried Scallops",
          prices: {
            plain: "$7.25",
            fries: "$9.25",
            plainVegetableFR: "$9.25",
            porkChickenFR: "$9.25",
            beefShrimpFR: "$9.75",
            porkChickenLM: "$11.95",
            beefShrimpLM: "$12.25",
            houseSpecialFRorLM: "$12.75",
          },
        },
        {
          dish: "(E) Fried Jumbo Shrimp",
          prices: {
            plain: "$7.75",
            fries: "$9.75",
            plainVegetableFR: "$9.75",
            porkChickenFR: "$9.75",
            beefShrimpFR: "$10.25",
            porkChickenLM: "$12.45",
            beefShrimpLM: "$12.75",
            houseSpecialFRorLM: "$13.25",
          },
        },
      ],
    },
  },
  {
    category: "Appetizers",
    disableSizeColumns: true,
    keepOriginalOrder: true,
    items: [
      { name: "Spring Roll (Vegetable)", price: "$1.85" },
      { name: "Pork Egg Roll", price: "$1.85" },
      { name: "Shrimp Egg Roll", price: "$1.95" },
      { name: "Fantail Shrimp", price: "$1.95" },
      { name: "Fried Crabmeat Sticks (5)", price: "$7.25" },
      { name: "Fried Pork Wontons (10)", price: "$7.25" },
      { name: "Cream Cheese Wontons (10)", price: "$7.25" },
      { name: "Crab Rangoons (8)", price: "$7.25" },
      { name: "Steamed or Fried Dumplings (7)", price: "$7.50" },
      { name: "BBQ Spare Ribs", price: "$8.75 / $16.25" },
      { name: "Boneless Spare Ribs", price: "$8.75 / $16.25" },
      { name: "Teriyaki Beef (4)", price: "$7.95" },
      { name: "Pu Pu Platter (for 2)", price: "$18.99" },
      { name: "Fried Plantains", price: "$4.95" },
      { name: "French Fries", price: "$3.95" },
    ],
  },
  {
    category: "Soups (Served with Crispy Noodles)",
    items: [
      { name: "Wonton Soup", price: "$3.75 / $5.50" },
      { name: "Egg Drop Soup", price: "$3.25 / $4.50" },
      { name: "Chicken Noodle or Rice Soup", price: "$3.75 / $5.50" },
      { name: "House Special Soup", price: "$7.75" },
      { name: "Wonton Egg Drop Mixed", price: "$4.25 / $5.50" },
      { name: "Hot and Sour Soup", price: "$4.95 / $7.50" },
      { name: "Seafood Soup", price: "$8.25" },
      { name: "Mixed Vegetable Soup", price: "$5.25 / $7.25" },
    ],
  },
  {
    category: "Fried Rice",
    keepOriginalOrder: true,
    items: [
      { name: "Plain Fried Rice", price: "$5.75 / $8.95" },
      { name: "Vegetable Fried Rice", price: "$7.25 / $10.95" },
      { name: "Roast Pork Fried Rice", price: "$7.25 / $10.95" },
      { name: "Chicken Fried Rice", price: "$7.25 / $10.95" },
      { name: "Beef Fried Rice", price: "$7.50 / $11.25" },
      { name: "Shrimp Fried Rice", price: "$7.50 / $11.25" },
      { name: "Crab Meat Fried Rice", price: "$7.25 / $10.95" },
      { name: "House Special Fried Rice", price: "$8.25 / $12.25" },
    ],
  },
  {
    category: "Lo Mein (Soft Noodle)",
    keepOriginalOrder: true,
    items: [
      { name: "Vegetable Lo Mein", price: "$7.75 / $11.25" },
      { name: "Roast Pork Lo Mein", price: "$7.75 / $11.25" },
      { name: "Chicken Lo Mein", price: "$7.75 / $11.25" },
      { name: "Beef Lo Mein", price: "$8.25 / $11.75" },
      { name: "Shrimp Lo Mein", price: "$8.25 / $11.75" },
      { name: "House Special Lo Mein", price: "$8.50 / $12.50" },
    ],
  },
  {
    category: "Chow Mein (Served with Rice and Crispy Noodles)",
    items: [
      { name: "Vegetable Chow Mein", price: "$6.95 / $10.50" },
      { name: "Chicken Chow Mein", price: "$7.45 / $10.75" },
      { name: "Roast Pork Chow Mein", price: "$7.45 / $10.75" },
      { name: "Beef Chow Mein", price: "$7.75 / $11.25" },
      { name: "Shrimp Chow Mein", price: "$7.75 / $11.25" },
    ],
  },
  {
    category: "Chow Rice Noodles (Mei Fun)",
    items: [
      { name: "Vegetable Chow Rice Noodles", price: "$11.25" },
      { name: "Roast Pork or Chicken Chow Rice Noodles", price: "$11.75" },
      { name: "Beef or Shrimp Chow Rice Noodles", price: "$12.75" },
      { name: "House Chow Rice Noodles", price: "$13.25" },
      { name: "Singapore Chow Rice Noodles", price: "$14.25" },
    ],
  },
  {
    category: "Sweet and Sour (Served with White Rice)",
    items: [
      { name: "Sweet and Sour Pork", price: "$8.95 / $12.95" },
      { name: "Sweet and Sour Shrimp", price: "$9.25 / $13.75" },
      { name: "Sweet and Sour Chicken", price: "$8.95 / $12.95" },
    ],
  },
  {
    category: "Egg Foo Young (Served with White Rice and Gravy)",
    keepOriginalOrder: true,
    items: [
      { name: "Vegetable Egg Foo Young", price: "$11.25" },
      { name: "Roast Pork Egg Foo Young", price: "$11.25" },
      { name: "Chicken Egg Foo Young", price: "$11.25" },
      { name: "Beef Egg Foo Young", price: "$11.95" },
      { name: "Shrimp Egg Foo Young", price: "$11.95" },
      { name: "House Special Egg Foo Young", price: "$13.95" },
    ],
  },
  {
    category: "Combination Plates (Served with Pork Fried Rice and an Egg Roll)",
    items: [
      { name: "Chicken Chow Mein", price: "$11.25" },
      { name: "Shrimp Chow Mein", price: "$11.25" },
      { name: "Roast Pork Egg Foo Young", price: "$11.25" },
      { name: "Pepper Steak with Onion", price: "$11.25" },
      { name: "Shrimp with Lobster Sauce", price: "$11.25" },
      { name: "Roast Pork with Chinese Vegetables", price: "$11.25" },
      { name: "Spare Ribs", price: "$11.25" },
      { name: "Sweet and Sour Pork", price: "$11.25" },
      { name: "Sweet and Sour Chicken", price: "$11.25" },
      { name: "Moo Goo Gai Pan", price: "$11.25" },
      { name: "Beef with Broccoli", price: "$11.25" },
      { name: "Chicken with Broccoli", price: "$11.25" },
      { name: "Diced Chicken with Cashew Nuts", price: "$11.25" },
      { name: "Sesame Chicken", price: "$11.25" },
      { name: "Chicken Lo Mein", price: "$11.25" },
      { name: "Roast Pork Lo Mein", price: "$11.25" },
      { name: "Beef in Garlic Sauce", price: "$11.25" },
      { name: "Shrimp in Garlic Sauce", price: "$11.25" },
      { name: "Chicken in Garlic Sauce", price: "$11.25" },
      { name: "Hot and Spicy Shrimp", price: "$11.25" },
      { name: "Hot and Spicy Chicken", price: "$11.25" },
      { name: "General Tso's Chicken", price: "$11.25" },
      { name: "Szechuan Chicken", price: "$11.25" },
      { name: "Szechuan Shrimp", price: "$11.25" },
      { name: "Hunan Chicken", price: "$11.25" },
      { name: "Hunan Shrimp", price: "$11.25" },
      { name: "Hunan Beef", price: "$11.25" },
      { name: "Kung Po Chicken", price: "$11.25" },
      { name: "Shrimp with Broccoli", price: "$11.25" },
      { name: "Boneless Spare Ribs", price: "$11.25" },
      { name: "Black Pepper Chicken", price: "$11.25" },
      { name: "General Tso's Shrimp", price: "$13.25" },
    ],
  },
  {
    category: "Luncheon Specials (Mon-Sat 11:00 AM-3:00 PM, Served with Pork Fried Rice)",
    items: [
      { name: "Chicken Chow Mein", price: "$8.75" },
      { name: "Shrimp Chow Mein", price: "$8.75" },
      { name: "Pepper Steak with Onion", price: "$8.75" },
      { name: "BBQ Spare Ribs", price: "$8.75" },
      { name: "Boneless Spare Ribs", price: "$8.75" },
      { name: "Moo Goo Gai Pan", price: "$8.75" },
      { name: "Shrimp with Lobster Sauce", price: "$8.75" },
      { name: "Fried Crab Meat Stick", price: "$8.75" },
      { name: "Sweet and Sour Chicken", price: "$8.75" },
      { name: "Sweet and Sour Pork", price: "$8.75" },
      { name: "Shrimp with Chinese Vegetables", price: "$8.75" },
      { name: "Roast Pork with Chinese Vegetables", price: "$8.75" },
      { name: "Crab Meat with Chinese Vegetables", price: "$8.75" },
      { name: "Roast Pork Lo Mein", price: "$8.75" },
      { name: "Chicken Lo Mein", price: "$8.75" },
      { name: "Beef with Broccoli", price: "$8.75" },
      { name: "Chicken with Broccoli", price: "$8.75" },
      { name: "Shrimp with Broccoli", price: "$8.75" },
      { name: "Chicken with Cashew Nuts", price: "$8.75" },
      { name: "Beef with Black Bean Sauce", price: "$8.75" },
      { name: "Chicken with Snow Peas", price: "$8.75" },
      { name: "Roast Pork with Snow Peas", price: "$8.75" },
      { name: "Broccoli with Garlic Sauce", price: "$8.75" },
      { name: "Hot and Spicy Shrimp", price: "$8.75" },
      { name: "Hot and Spicy Chicken", price: "$8.75" },
      { name: "Chicken with Garlic Sauce", price: "$8.75" },
      { name: "Curry Chicken with Onion", price: "$8.75" },
      { name: "Szechuan Beef", price: "$8.75" },
      { name: "Szechuan Chicken", price: "$8.75" },
      { name: "Szechuan Shrimp", price: "$8.75" },
      { name: "Hunan Chicken", price: "$8.75" },
      { name: "Hunan Beef", price: "$8.75" },
      { name: "Hunan Shrimp", price: "$8.75" },
      { name: "General Tso's Chicken", price: "$8.75" },
      { name: "Sesame Chicken", price: "$8.75" },
      { name: "Shrimp Lo Mein", price: "$8.75" },
      { name: "Beef Lo Mein", price: "$8.75" },
      { name: "Shrimp with Garlic Sauce", price: "$8.75" },
      { name: "Black Pepper Chicken", price: "$8.75" },
    ],
  },
  {
    category: "Pork (Served with White Rice)",
    items: [
      { name: "Roast Pork with Chinese Vegetables", price: "$8.95 / $12.95" },
      { name: "Roast Pork with Mushroom", price: "$8.95 / $12.95" },
      { name: "Roast Pork with Snow Peas", price: "$8.95 / $12.95" },
      { name: "Roast Pork with Bean Curd", price: "$8.95 / $12.95" },
      { name: "Roast Pork with Broccoli", price: "$8.95 / $12.95" },
      { name: "Roast Pork with Cashew Nuts", price: "$8.95 / $12.95" },
    ],
  },
  {
    category: "Chicken (Served with White Rice)",
    items: [
      { name: "Moo Goo Gai Pan", price: "$8.95 / $12.95" },
      { name: "Chicken with Broccoli", price: "$8.95 / $12.95" },
      { name: "Chicken with Snow Peas", price: "$8.95 / $12.95" },
      { name: "Curry Chicken with Onion", price: "$8.95 / $12.95" },
      { name: "Chicken with Bean Curd", price: "$8.95 / $12.95" },
      { name: "Chicken with Cashew Nuts", price: "$8.95 / $12.95" },
    ],
  },
  {
    category: "Beef (Served with White Rice)",
    items: [
      { name: "Pepper Steak with Onion", price: "$9.25 / $13.75" },
      { name: "Beef with Chinese Vegetables", price: "$9.25 / $13.75" },
      { name: "Beef with Snow Peas", price: "$9.25 / $13.75" },
      { name: "Beef with Bean Curd", price: "$9.25 / $13.75" },
      { name: "Beef with Broccoli", price: "$9.25 / $13.75" },
      { name: "Curry Beef with Onion", price: "$9.25 / $13.75" },
    ],
  },
  {
    category: "Seafood (Served with White Rice)",
    items: [
      { name: "Shrimp with Lobster Sauce", price: "$9.25 / $13.75" },
      { name: "Shrimp with Chinese Vegetables", price: "$9.25 / $13.75" },
      { name: "Shrimp with Broccoli", price: "$9.25 / $13.75" },
      { name: "Curry Shrimp with Onion", price: "$9.25 / $13.75" },
      { name: "Shrimp with Snow Peas", price: "$9.25 / $13.75" },
      { name: "Shrimp with Bean Curd", price: "$9.25 / $13.75" },
      { name: "Shrimp with Cashew Nuts", price: "$9.25 / $13.75" },
    ],
  },
  {
    category: "Chef's Specialties (Served with White Rice)",
    items: [
      { name: "Happy Family", price: "$16.50" },
      { name: "Special Four Season", price: "$16.50" },
      { name: "Seafood Delight", price: "$16.50" },
      { name: "General Tso's Chicken", price: "$13.75" },
      { name: "Hunan Style Beef, Shrimp, Chicken", price: "$16.50" },
      { name: "Triple Szechuan Delight", price: "$16.50" },
      { name: "Home Style Bean Curd", price: "$13.25" },
      { name: "Hawaii Five-O", price: "$16.50" },
      { name: "Chicken with Orange Peels", price: "$13.75" },
      { name: "Scallops and Beef", price: "$16.50" },
      { name: "Sesame Chicken", price: "$13.75" },
      { name: "Shrimp and Scallop", price: "$16.50" },
    ],
  },
  {
    category: "Szechuan and Cantonese Special (Served with White Rice)",
    items: [
      { name: "Chicken in Garlic Sauce", price: "$12.95" },
      { name: "Beef in Garlic Sauce", price: "$13.75" },
      { name: "Shrimp in Garlic Sauce", price: "$13.75" },
      { name: "Pork in Garlic Sauce", price: "$12.95" },
      { name: "Broccoli with Garlic Sauce", price: "$11.25" },
      { name: "Kung Po Chicken", price: "$12.95" },
      { name: "Kung Po Beef", price: "$13.75" },
      { name: "Kung Po Shrimp", price: "$13.75" },
      { name: "Shrimp Szechuan Style", price: "$13.75" },
      { name: "Hunan Shrimp", price: "$13.75" },
      { name: "Hunan Chicken", price: "$12.95" },
      { name: "Hunan Beef", price: "$13.75" },
      { name: "Hot and Spicy Shrimp", price: "$13.75" },
      { name: "Hot and Spicy Chicken", price: "$12.95" },
      { name: "Szechuan Chicken", price: "$12.95" },
      { name: "Szechuan Beef", price: "$13.75" },
    ],
  },
  {
    category: "Vegetarian (Served with White Rice)",
    items: [{ name: "Mixed Vegetables", price: "$6.95 / $11.25" }],
  },
  {
    category: "Dessert and Extras",
    items: [
      { name: "Fortune Cookies (5) (Per Bag)", price: "$1.00" },
      { name: "Extra Fried Noodles (Per Bag)", price: "$1.00" },
      { name: "Extra White Rice (Pt.)", price: "$3.00" },
      { name: "Extra Sauce", price: "$1.00" },
    ],
  },
];

const dishNameZh = {
  "(A) Chicken Wings": "(A) 鸡翅",
  "(B) Chicken Gizzards": "(B) 鸡胗",
  "(C) Rib Tips": "(C) 排骨尖",
  "(D) Fried Scallops": "(D) 炸带子",
  "(E) Fried Jumbo Shrimp": "(E) 炸大虾",
  "BBQ Spare Ribs": "烧烤排骨",
  "Beef Chow Mein": "牛肉炒面",
  "Beef Egg Foo Young": "牛肉芙蓉蛋",
  "Beef Fried Rice": "牛肉炒饭",
  "Beef Lo Mein": "牛肉捞面",
  "Beef in Garlic Sauce": "蒜蓉牛肉",
  "Beef or Shrimp Chow Rice Noodles": "牛肉或虾炒米粉",
  "Beef with Bean Curd": "豆腐牛肉",
  "Beef with Black Bean Sauce": "豆豉牛肉",
  "Beef with Broccoli": "西兰花牛肉",
  "Beef with Chinese Vegetables": "杂菜牛肉",
  "Beef with Snow Peas": "荷兰豆牛肉",
  "Black Pepper Chicken": "黑椒鸡",
  "Boneless Spare Ribs": "无骨排骨",
  "Broccoli with Garlic Sauce": "蒜蓉西兰花",
  "Chicken Chow Mein": "鸡肉炒面",
  "Chicken Egg Foo Young": "鸡肉芙蓉蛋",
  "Chicken Fried Rice": "鸡肉炒饭",
  "Chicken Lo Mein": "鸡肉捞面",
  "Chicken Noodle or Rice Soup": "鸡肉面汤或饭汤",
  "Chicken in Garlic Sauce": "蒜蓉鸡",
  "Chicken with Bean Curd": "豆腐鸡",
  "Chicken with Broccoli": "西兰花鸡",
  "Chicken with Cashew Nuts": "腰果鸡",
  "Chicken with Garlic Sauce": "蒜蓉鸡",
  "Chicken with Orange Peels": "陈皮鸡",
  "Chicken with Snow Peas": "荷兰豆鸡",
  "Crab Meat Fried Rice": "蟹肉炒饭",
  "Crab Meat with Chinese Vegetables": "蟹肉杂菜",
  "Crab Rangoons (8)": "蟹角（8）",
  "Cream Cheese Wontons (10)": "奶酪云吞（10）",
  "Curry Beef with Onion": "咖喱洋葱牛肉",
  "Curry Chicken with Onion": "咖喱洋葱鸡",
  "Curry Shrimp with Onion": "咖喱洋葱虾",
  "Diced Chicken with Cashew Nuts": "腰果鸡丁",
  "Egg Drop Soup": "蛋花汤",
  "Extra Fried Noodles (Per Bag)": "额外炸面（每袋）",
  "Extra Sauce": "额外酱汁",
  "Extra White Rice (Pt.)": "额外白饭（小份）",
  "Fantail Shrimp": "凤尾虾",
  "Fortune Cookies (5) (Per Bag)": "幸运饼干（5个/袋）",
  "French Fries": "薯条",
  "Fried Crab Meat Stick": "炸蟹棒",
  "Fried Crabmeat Sticks (5)": "炸蟹棒（5）",
  "Fried Plantains": "炸香蕉",
  "Fried Pork Wontons (10)": "炸猪肉云吞（10）",
  "General Tso's Chicken": "左宗鸡",
  "General Tso's Shrimp": "左宗虾",
  "Happy Family": "全家福",
  "Hawaii Five-O": "夏威夷五味",
  "Home Style Bean Curd": "家常豆腐",
  "Hot and Sour Soup": "酸辣汤",
  "Hot and Spicy Chicken": "香辣鸡",
  "Hot and Spicy Shrimp": "香辣虾",
  "House Chow Rice Noodles": "本楼炒米粉",
  "House Special Egg Foo Young": "本楼芙蓉蛋",
  "House Special Fried Rice": "本楼炒饭",
  "House Special Lo Mein": "本楼捞面",
  "House Special Soup": "本楼汤",
  "Hunan Beef": "湖南牛",
  "Hunan Chicken": "湖南鸡",
  "Hunan Shrimp": "湖南虾",
  "Hunan Style Beef, Shrimp, Chicken": "湖南三样（牛、虾、鸡）",
  "Kung Po Beef": "宫保牛",
  "Kung Po Chicken": "宫保鸡",
  "Kung Po Shrimp": "宫保虾",
  "Mixed Vegetable Soup": "杂菜汤",
  "Mixed Vegetables": "杂菜",
  "Moo Goo Gai Pan": "蘑菇鸡片",
  "Pepper Steak with Onion": "洋葱青椒牛",
  "Plain Fried Rice": "白炒饭",
  "Pork Egg Roll": "猪肉春卷",
  "Pork in Garlic Sauce": "蒜蓉猪肉",
  "Pu Pu Platter (for 2)": "拼盘（两人份）",
  "Roast Pork Chow Mein": "叉烧炒面",
  "Roast Pork Egg Foo Young": "叉烧芙蓉蛋",
  "Roast Pork Fried Rice": "叉烧炒饭",
  "Roast Pork Lo Mein": "叉烧捞面",
  "Roast Pork or Chicken Chow Rice Noodles": "叉烧或鸡肉炒米粉",
  "Roast Pork with Bean Curd": "豆腐叉烧",
  "Roast Pork with Broccoli": "西兰花叉烧",
  "Roast Pork with Cashew Nuts": "腰果叉烧",
  "Roast Pork with Chinese Vegetables": "杂菜叉烧",
  "Roast Pork with Mushroom": "蘑菇叉烧",
  "Roast Pork with Snow Peas": "荷兰豆叉烧",
  "Scallops and Beef": "带子牛肉",
  "Seafood Delight": "海鲜大杂烩",
  "Seafood Soup": "海鲜汤",
  "Sesame Chicken": "芝麻鸡",
  "Shrimp Chow Mein": "虾炒面",
  "Shrimp Egg Foo Young": "虾芙蓉蛋",
  "Shrimp Egg Roll": "虾春卷",
  "Shrimp Fried Rice": "虾炒饭",
  "Shrimp Lo Mein": "虾捞面",
  "Shrimp Szechuan Style": "四川虾",
  "Shrimp and Scallop": "虾仁带子",
  "Shrimp in Garlic Sauce": "蒜蓉虾",
  "Shrimp with Bean Curd": "豆腐虾",
  "Shrimp with Broccoli": "西兰花虾",
  "Shrimp with Cashew Nuts": "腰果虾",
  "Shrimp with Chinese Vegetables": "杂菜虾",
  "Shrimp with Garlic Sauce": "蒜蓉虾",
  "Shrimp with Lobster Sauce": "虾龙糊",
  "Shrimp with Snow Peas": "荷兰豆虾",
  "Singapore Chow Rice Noodles": "星洲炒米粉",
  "Spare Ribs": "排骨",
  "Special Four Season": "四季什锦",
  "Spring Roll (Vegetable)": "蔬菜春卷",
  "Steamed or Fried Aumplings (7)": "蒸或炸饺子（7）",
  "Sweet and Sour Chicken": "甜酸鸡",
  "Sweet and Sour Pork": "甜酸猪肉",
  "Sweet and Sour Shrimp": "甜酸虾",
  "Szechuan Beef": "四川牛",
  "Szechuan Chicken": "四川鸡",
  "Szechuan Shrimp": "四川虾",
  "Teriyaki Beef (4)": "照烧牛串（4）",
  "Triple Szechuan Delight": "四川三样",
  "Vegetable Chow Mein": "杂菜炒面",
  "Vegetable Chow Rice Noodles": "杂菜炒米粉",
  "Vegetable Egg Foo Young": "杂菜芙蓉蛋",
  "Vegetable Fried Rice": "杂菜炒饭",
  "Vegetable Lo Mein": "杂菜捞面",
  "Wonton Egg Drop Mixed": "云吞蛋花汤",
  "Wonton Soup": "云吞汤",
};

function formatDishDisplayName(name) {
  const zhName = dishNameZh[name];
  if (!zhName) return name;
  return `
    <span class="dish-name-stack">
      <span class="dish-name-en">${name}</span>
      <span class="dish-name-zh">${zhName}</span>
    </span>
  `;
}

function splitSizedPrice(price) {
  const parts = price.split("/").map((part) => part.trim());
  return parts.length === 2 ? parts : null;
}

function splitCategoryLabel(category) {
  const openIndex = category.indexOf("(");
  const closeIndex = category.lastIndexOf(")");

  if (openIndex === -1 || closeIndex === -1 || closeIndex <= openIndex) {
    return { title: category, subtext: "" };
  }

  return {
    title: category.slice(0, openIndex).trim(),
    subtext: category.slice(openIndex + 1, closeIndex).trim(),
  };
}

function parsePrimaryPrice(priceText) {
  const match = priceText.match(/\$([0-9]+(?:\.[0-9]{1,2})?)/);
  return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

function proteinRank(name) {
  const lower = name.toLowerCase();
  if (lower.includes("roast pork")) return 0;
  if (lower.includes(" pork")) return 0;
  if (lower.startsWith("pork ")) return 0;
  if (lower.includes("chicken")) return 1;
  if (lower.includes("beef")) return 2;
  if (lower.includes("shrimp")) return 3;
  if (lower.includes("vegetable")) return 4;
  return 5;
}

function styleKey(name) {
  return name
    .toLowerCase()
    .replace(/\b(roast pork|pork|chicken|beef|shrimp|vegetable|mixed vegetables|mixed vegetable|crab meat|house special)\b/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function compareMenuItems(a, b) {
  const aPrice = parsePrimaryPrice(a.price);
  const bPrice = parsePrimaryPrice(b.price);

  if (aPrice !== bPrice) {
    return aPrice - bPrice;
  }

  const aStyle = styleKey(a.name);
  const bStyle = styleKey(b.name);
  if (aStyle !== bStyle) {
    return aStyle.localeCompare(bStyle);
  }

  const aProtein = proteinRank(a.name);
  const bProtein = proteinRank(b.name);
  if (aProtein !== bProtein) {
    return aProtein - bProtein;
  }

  return a.name.localeCompare(b.name);
}

function toSectionId(label, index) {
  const base = label
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return `menu-section-${index + 1}-${base}`;
}

function renderMenu() {
  const menuGrid = document.querySelector("#menu-grid");
  const menuJump = document.querySelector("#menu-jump");
  if (!menuGrid) return;

  const renderedSections = menuData.map((section, index) => {
      const categoryLabel = splitCategoryLabel(section.category);
      const sectionId = toSectionId(categoryLabel.title, index);
      const sectionItems = [...(section.items || [])];
      if (!section.keepOriginalOrder) {
        sectionItems.sort(compareMenuItems);
      }
      const hasSpecialTable = Boolean(section.specialTable);
      const sectionHasSizeColumns =
        !hasSpecialTable &&
        !section.disableSizeColumns &&
        sectionItems.some((item) => Boolean(splitSizedPrice(item.price)));

      const sizeHeader = sectionHasSizeColumns
        ? `
            <li class="menu-item menu-size-header">
              <span class="menu-item-name"></span>
              <span class="menu-item-prices">
                <span class="menu-item-size-label">Sm.</span>
                <span class="menu-item-size-label">Lg.</span>
              </span>
            </li>
          `
        : "";

      const items = sectionItems
        .map((item) => {
          if (!sectionHasSizeColumns) {
            return `
              <li class="menu-item">
                <span class="menu-item-name">${formatDishDisplayName(item.name)}</span>
                <span class="menu-item-price">${item.price}</span>
              </li>
            `;
          }

          const sizedPrice = splitSizedPrice(item.price);
          if (sizedPrice) {
            return `
              <li class="menu-item">
                <span class="menu-item-name">${formatDishDisplayName(item.name)}</span>
                <span class="menu-item-prices">
                  <span class="menu-item-price">${sizedPrice[0]}</span>
                  <span class="menu-item-price">${sizedPrice[1]}</span>
                </span>
              </li>
            `;
          }

          return `
            <li class="menu-item">
              <span class="menu-item-name">${formatDishDisplayName(item.name)}</span>
              <span class="menu-item-prices">
                <span class="menu-item-price menu-item-price-single">${item.price}</span>
              </span>
            </li>
          `;
        })
        .join("");

      let sectionContent = `<ul class="menu-list">${sizeHeader}${items}</ul>`;

      if (hasSpecialTable) {
        const headers = section.specialTable.columns
          .map((column) => `<th scope="col">${column.label}</th>`)
          .join("");
        const rows = section.specialTable.rows
          .map((row) => {
            const cells = section.specialTable.columns
              .map((column) => `<td>${row.prices[column.key] || "N/A"}</td>`)
              .join("");
            return `<tr><th scope="row">${formatDishDisplayName(row.dish)}</th>${cells}</tr>`;
          })
          .join("");

        sectionContent = `
          <div class="special-table-wrap">
            <table class="special-table">
              <thead>
                <tr>
                  <th scope="col">Dish</th>
                  ${headers}
                </tr>
              </thead>
              <tbody>
                ${rows}
              </tbody>
            </table>
          </div>
        `;
      }

      const sectionClass = hasSpecialTable
        ? "menu-category menu-category-wide menu-category-special-table"
        : "menu-category";

      const html = `
        <article class="${sectionClass}" id="${sectionId}">
          <h3>${categoryLabel.title}</h3>
          ${
            categoryLabel.subtext
              ? `<p class="menu-category-subtext">${categoryLabel.subtext}</p>`
              : ""
          }
          ${sectionContent}
        </article>
      `;

      return {
        id: sectionId,
        title: categoryLabel.title,
        html,
      };
    });

  menuGrid.innerHTML = renderedSections.map((section) => section.html).join("");

  if (menuJump) {
    menuJump.innerHTML = renderedSections
      .map(
        (section) =>
          `<a class="menu-jump-link" href="#${section.id}">${section.title}</a>`,
      )
      .join("");
  }
}

document.addEventListener("DOMContentLoaded", renderMenu);

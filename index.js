// ==========================================================================
// MENU DATA
// ==========================================================================
const MENU_ITEMS = [
  // ==========================================================================
  // GUJJU NASTA HOUSE (section: "nasta")
  // ==========================================================================
  // Category: nasta-specials
  {
    id: 1,
    name: "Dabeli",
    category: "nasta-specials",
    price: 7.00,
    desc: "Spicy, sweet and tangy potato mixture stuffed in a bun, garnished with crunchy roasted peanuts, fresh pomegranate, and crispy sev.",
    image: "assets/dabeli.png",
    diets: ["veg", "halal"],
    section: "nasta"
  },
  {
    id: 2,
    name: "Vada Pav",
    category: "nasta-specials",
    price: 7.00,
    desc: "Mumbai's signature street burger. Spicy golden potato dumpling inside a soft bun, spread with zesty sweet & fiery dry garlic chutneys.",
    image: "assets/vada_pav.png",
    diets: ["veg", "spicy", "halal"],
    section: "nasta"
  },
  {
    id: 3,
    name: "Samosa",
    category: "nasta-specials",
    price: 7.50,
    desc: "Crisp flaky triangular pastries stuffed with spiced potatoes and green peas. Served with sweet tamarind and spicy mint chutneys.",
    image: "assets/samosa_chaat.png",
    diets: ["veg", "vegan", "halal"],
    section: "nasta"
  },
  {
    id: 4,
    name: "Pav Bhaji",
    category: "nasta-specials",
    price: 15.00,
    desc: "A spicy blend of mashed vegetables cooked in a rich butter gravy, served hot with soft toasted buttered buns (pav), onions, and lime.",
    image: "assets/vada_pav.png",
    diets: ["veg", "halal"],
    section: "nasta"
  },
  {
    id: 5,
    name: "Bread Chataka",
    category: "nasta-specials",
    price: 15.00,
    desc: "Spicy and tangy masala toast loaded with special house chutneys, vegetables, and grated cheddar cheese.",
    image: "assets/veg_sandwich.png",
    diets: ["veg"],
    section: "nasta"
  },
  {
    id: 6,
    name: "Chole Bhature",
    category: "nasta-specials",
    price: 17.00,
    desc: "Spicy chickpeas curry (chole) served with two large, fluffy, deep-fried leavened sourdough breads (bhature), pickles, and onions.",
    image: "assets/aloo_tikki_chaat.png",
    diets: ["veg", "spicy"],
    section: "nasta"
  },
  {
    id: 7,
    name: "Bhel Puri",
    category: "nasta-specials",
    price: 10.00,
    desc: "A crispy, sweet, tangy snack made of puffed rice, tossed with raw onions, tomatoes, potatoes, sev, coriander, and spiced chutneys.",
    image: "assets/dabeli.png",
    diets: ["veg", "vegan", "halal"],
    section: "nasta"
  },

  // Category: chat-corner
  {
    id: 8,
    name: "Aloo Tikki Chat",
    category: "chat-corner",
    price: 14.00,
    desc: "Crispy fried spiced potato patties crushed and smothered with warm chickpeas, sweet yogurt, green herb chutney, and tamarind glaze.",
    image: "assets/aloo_tikki_chaat.png",
    diets: ["veg", "halal"],
    section: "nasta"
  },
  {
    id: 9,
    name: "Surti Collegian Bhel",
    category: "chat-corner",
    price: 10.00,
    desc: "A unique Gujarati bhel variety from Surat made with puffed rice, onions, tomatoes, raw mango, peanuts, and fiery garlic chutney.",
    image: "assets/dabeli.png",
    diets: ["veg", "spicy", "vegan"],
    section: "nasta"
  },
  {
    id: 10,
    name: "Dahi Puri",
    category: "chat-corner",
    price: 14.00,
    desc: "Crispy puffed puri shells stuffed with potatoes, chickpeas, sweetened yogurt, tamarind and mint chutneys, topped with crispy sev.",
    image: "assets/samosa_chaat.png",
    diets: ["veg", "halal"],
    section: "nasta"
  },
  {
    id: 11,
    name: "Pani Puri",
    category: "chat-corner",
    price: 10.00,
    desc: "Crispy hollow puris filled with spiced potatoes and black chickpeas, served with sweet tamarind water and spicy mint-coriander water.",
    image: "assets/lime_slice.png",
    diets: ["veg", "vegan", "spicy", "halal"],
    section: "nasta"
  },
  {
    id: 12,
    name: "Samosa Chat",
    category: "chat-corner",
    price: 14.00,
    desc: "Crisp hot samosas broken and topped with warm chickpea curry, sweetened yogurt, tangy tamarind chutney, mint chutney, and sev.",
    image: "assets/samosa_chaat.png",
    diets: ["veg", "spicy", "halal"],
    section: "nasta"
  },
  {
    id: 13,
    name: "Bean Salad",
    category: "chat-corner",
    price: 6.99,
    desc: "Healthy high-protein salad made with mixed boiled beans, crunchy cucumber, tomatoes, onions, tossed in a lemon-spice dressing.",
    image: "assets/mint_leaf.png",
    diets: ["veg", "vegan", "halal"],
    section: "nasta"
  },

  // Category: sandwich-hub
  {
    id: 14,
    name: "Aloo Matar Sandwich",
    category: "sandwich-hub",
    price: 9.99,
    desc: "Toasted sandwich stuffed with a spiced mashed potato and green peas filling, spread with green chutney and butter.",
    image: "assets/veg_sandwich.png",
    diets: ["veg", "halal"],
    section: "nasta"
  },
  {
    id: 15,
    name: "Veg Sandwich",
    category: "sandwich-hub",
    price: 10.00,
    desc: "Mumbai-style toasted club sandwich loaded with sliced cucumber, tomatoes, beetroots, potatoes, cheese, and spicy herb chutney.",
    image: "assets/veg_sandwich.png",
    diets: ["veg", "halal"],
    section: "nasta"
  },
  {
    id: 16,
    name: "Cheese Jam Sandwich",
    category: "sandwich-hub",
    price: 7.00,
    desc: "Kid-friendly classic toasted sweet-and-savory sandwich made with mixed fruit jam and melted cheddar cheese.",
    image: "assets/veg_sandwich.png",
    diets: ["veg"],
    section: "nasta"
  },

  // Category: fries-bites
  {
    id: 17,
    name: "Onion Rings",
    category: "fries-bites",
    price: 6.99,
    desc: "Crispy golden beer-battered onion rings served with a spicy dip.",
    image: "assets/lime_slice.png",
    diets: ["veg", "vegan"],
    section: "nasta"
  },
  {
    id: 18,
    name: "Chicken Nuggets (6 Pcs) & Chips",
    category: "fries-bites",
    price: 9.99,
    desc: "Golden fried crispy chicken breast nuggets served with a side of hot potato chips and tomato sauce.",
    image: "assets/nonveg_icon.png",
    diets: ["halal"],
    section: "nasta"
  },

  // Category: chai-snacks
  {
    id: 19,
    name: "Masala Chana",
    category: "chai-snacks",
    price: 6.99,
    desc: "Spiced roasted chickpeas tossed with mustard seeds, curry leaves, and green chilies. A perfect savory accompaniment for tea.",
    image: "assets/red_chili.png",
    diets: ["veg", "vegan", "spicy", "halal"],
    section: "nasta"
  },
  {
    id: 20,
    name: "Chana Chur",
    category: "chai-snacks",
    price: 6.99,
    desc: "Popular spicy street snack made of flattened chickpeas, mixed with peanuts, sev, spices, raw onions, and a splash of lemon juice.",
    image: "assets/dabeli.png",
    diets: ["veg", "vegan", "spicy", "halal"],
    section: "nasta"
  },
  {
    id: 21,
    name: "Chai",
    category: "chai-snacks",
    price: 4.99,
    desc: "Freshly brewed hot milk tea simmered with fresh crushed ginger and cardamom.",
    image: "assets/mint_leaf.png",
    diets: ["veg"],
    section: "nasta"
  },
  {
    id: 22,
    name: "Ice Cream",
    category: "chai-snacks",
    price: 7.00,
    desc: "Two scoops of traditional Indian flavored ice cream (choice of Mango or Kesar Pista).",
    image: "assets/lime_slice.png",
    diets: ["veg"],
    section: "nasta"
  },
  {
    id: 23,
    name: "Chips",
    category: "chai-snacks",
    price: 7.99,
    desc: "Crispy hot potato French fries. (Add Peri Peri Salt +$1.00)",
    image: "assets/lime_slice.png",
    diets: ["veg", "vegan", "halal"],
    section: "nasta"
  },

  // ==========================================================================
  // CURRIES MENU SECTION (section: "main")
  // ==========================================================================
  // Category: starters
  {
    id: 25,
    name: "Samosa (2 Pcs)",
    category: "starters",
    price: 7.50,
    desc: "Crisp flaky triangular pastries stuffed with spiced potatoes and green peas. Served with sweet tamarind and spicy mint chutneys.",
    image: "assets/samosa_chaat.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },
  {
    id: 26,
    name: "Onion Bhaji",
    category: "starters",
    price: 8.00,
    desc: "Crispy thinly sliced onion fritters coated in a seasoned chickpea flour (besan) batter and deep-fried. Served with herb dip.",
    image: "assets/dabeli.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },
  {
    id: 27,
    name: "Gobi Manchurian",
    category: "starters",
    price: 15.99,
    desc: "Indo-Chinese fusion dish. Crispy cauliflower florets tossed in a sweet, tangy, and slightly spicy chili-garlic-soy sauce glaze.",
    image: "assets/aloo_tikki_chaat.png",
    diets: ["veg", "vegan", "spicy"],
    section: "main"
  },
  {
    id: 28,
    name: "Paneer Tikka",
    category: "starters",
    price: 16.99,
    desc: "Fresh cottage cheese cubes (paneer) marinated in spiced yogurt and grilled in a clay oven (tandoor) with bell peppers and onions.",
    image: "assets/vada_pav.png",
    diets: ["veg", "halal"],
    section: "main"
  },

  // Category: special-curries
  {
    id: 29,
    name: "Whole Onion Curry",
    category: "special-curries",
    price: 23.00,
    desc: "Whole pickling onions cooked with ground peanuts, sesame seeds, chickpeas, tomatoes and hand-ground spices, topped with cashew nuts and raisins.",
    image: "assets/hero.png",
    diets: ["veg", "vegan"],
    section: "main"
  },
  {
    id: 30,
    name: "Eggplant Bhartha",
    category: "special-curries",
    price: 23.00,
    desc: "Traditional style mashed roasted clay-oven smoked eggplant, cooked with fresh spring onions, tomatoes, garlic, ginger, and cumin.",
    image: "assets/hero.png",
    diets: ["veg", "vegan"],
    section: "main"
  },
  {
    id: 31,
    name: "Sev Tomato",
    category: "special-curries",
    price: 20.00,
    desc: "Spiced sweet-and-sour fresh tomato curry cooked with garlic, ginger, and curry leaves, topped with crunchy chickpea noodles (sev).",
    image: "assets/hero.png",
    diets: ["veg", "vegan"],
    section: "main"
  },
  {
    id: 32,
    name: "Bhindi Masala",
    category: "special-curries",
    price: 22.00,
    desc: "Fresh tender ladyfingers (okra) stir-fried with plenty of onions, tomatoes, traditional spices, and finished with a splash of thick yogurt.",
    image: "assets/hero.png",
    diets: ["veg"],
    section: "main"
  },
  {
    id: 33,
    name: "Chana Masala",
    category: "special-curries",
    price: 22.00,
    desc: "Black chickpeas (kala chana) slow-cooked in a tangy onion-tomato gravy with soft potatoes, green chilies, and fresh coriander leaves.",
    image: "assets/hero.png",
    diets: ["veg", "vegan", "spicy"],
    section: "main"
  },
  {
    id: 34,
    name: "Bhungla Bataka",
    category: "special-curries",
    price: 16.99,
    desc: "Spicy baby potatoes simmered in a garlicky onion-tomato chutney, served with crispy fried hollow yellow pipe fryums (bhungla).",
    image: "assets/hero.png",
    diets: ["veg", "vegan", "spicy"],
    section: "main"
  },

  // Category: snacks
  {
    id: 35,
    name: "Pav Bhaji",
    category: "snacks",
    price: 15.00,
    desc: "Spicy mashed mixed vegetable curry cooked in butter, served with soft buttered pav rolls, finely chopped red onions, and lemon.",
    image: "assets/vada_pav.png",
    diets: ["veg", "halal"],
    section: "main"
  },
  {
    id: 36,
    name: "Dabeli",
    category: "snacks",
    price: 7.00,
    desc: "Gujarati sweet-spicy potato bun garnished with peanuts, pomegranate seeds, fresh coriander, sweet tamarind glaze, and sev.",
    image: "assets/dabeli.png",
    diets: ["veg", "halal"],
    section: "main"
  },
  {
    id: 37,
    name: "Vada Pav",
    category: "snacks",
    price: 7.00,
    desc: "Mumbai's potato dumpling burger spread with hot green chutney and sweet-spicy garlic powder chutneys. Served with green chili.",
    image: "assets/vada_pav.png",
    diets: ["veg", "spicy", "halal"],
    section: "main"
  },

  // Category: veg-curries
  {
    id: 38,
    name: "Paneer Butter Masala",
    category: "veg-curries",
    price: 22.00,
    desc: "Succulent paneer cubes simmered in a creamy, velvety tomato and cashew nut gravy, flavored with dried fenugreek leaves (kasuri methi).",
    image: "assets/hero.png",
    diets: ["veg", "halal"],
    section: "main"
  },
  {
    id: 39,
    name: "Dal Tadka",
    category: "veg-curries",
    price: 18.00,
    desc: "Yellow split lentils (toor dal) slow-cooked and tempered with ghee, cumin seeds, garlic, dried red chilies, and fresh curry leaves.",
    image: "assets/hero.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },
  {
    id: 40,
    name: "Malai Kofta",
    category: "veg-curries",
    price: 22.00,
    desc: "Paneer and potato dumplings (koftas) stuffed with raisins, deep-fried, and served in a rich, sweet cashew nut and cream sauce.",
    image: "assets/hero.png",
    diets: ["veg", "halal"],
    section: "main"
  },

  // Category: nonveg-curries
  {
    id: 41,
    name: "Butter Chicken",
    category: "nonveg-curries",
    price: 23.99,
    desc: "Tandoor roasted boneless chicken tikka cooked in a mild, buttery, sweet tomato gravy with cashew paste and heavy cream.",
    image: "assets/butter_chicken.png",
    diets: ["halal"],
    section: "main"
  },
  {
    id: 42,
    name: "Lamb Rogan Josh",
    category: "nonveg-curries",
    price: 24.99,
    desc: "Tender lamb pieces slow-cooked in a traditional Kashmiri style gravy flavored with fennel seeds, ginger, and red chilies.",
    image: "assets/butter_chicken.png",
    diets: ["halal", "spicy"],
    section: "main"
  },
  {
    id: 43,
    name: "Chicken Tikka Masala",
    category: "nonveg-curries",
    price: 23.99,
    desc: "Grilled chicken pieces cooked with sliced bell peppers and onions in a thick, semi-dry, medium-spicy onion-tomato masala gravy.",
    image: "assets/butter_chicken.png",
    diets: ["halal", "spicy"],
    section: "main"
  },

  // Category: breads
  {
    id: 44,
    name: "Garlic Naan",
    category: "breads",
    price: 5.00,
    desc: "Soft leavened clay-oven baked flatbread topped with minced garlic and butter.",
    image: "assets/hero.png",
    diets: ["veg"],
    section: "main"
  },
  {
    id: 45,
    name: "Butter Naan",
    category: "breads",
    price: 4.50,
    desc: "Soft leavened flatbread brushed with butter.",
    image: "assets/hero.png",
    diets: ["veg"],
    section: "main"
  },
  {
    id: 46,
    name: "Roti",
    category: "breads",
    price: 4.00,
    desc: "Whole wheat unleavened flatbread baked in the tandoor.",
    image: "assets/hero.png",
    diets: ["veg", "vegan"],
    section: "main"
  },
  {
    id: 47,
    name: "Paratha",
    category: "breads",
    price: 5.00,
    desc: "Layered whole wheat pan-fried flatbread.",
    image: "assets/hero.png",
    diets: ["veg"],
    section: "main"
  },

  // Category: rice
  {
    id: 48,
    name: "Basmati Rice",
    category: "rice",
    price: 5.00,
    desc: "Fragrant boiled long-grain basmati rice.",
    image: "assets/hero.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },
  {
    id: 49,
    name: "Jeera Rice",
    category: "rice",
    price: 6.00,
    desc: "Basmati rice tempered with cumin seeds and butter.",
    image: "assets/hero.png",
    diets: ["veg", "halal"],
    section: "main"
  },
  {
    id: 50,
    name: "Veg Biryani",
    category: "rice",
    price: 16.00,
    desc: "Spiced basmati rice layered with mixed vegetables, saffron, mint, and slow-cooked (dum) in a sealed pot.",
    image: "assets/hero.png",
    diets: ["veg", "vegan", "spicy", "halal"],
    section: "main"
  },

  // Category: salad
  {
    id: 51,
    name: "Bean Salad",
    category: "salad",
    price: 6.99,
    desc: "Healthy high-protein salad made with mixed boiled beans, cucumber, onions, and raw spices.",
    image: "assets/mint_leaf.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },
  {
    id: 52,
    name: "Garden Salad",
    category: "salad",
    price: 6.00,
    desc: "Fresh sliced lettuce, cucumber, tomatoes, carrots, and onions, dressed with lemon and chat masala.",
    image: "assets/mint_leaf.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },

  // Category: extras
  {
    id: 53,
    name: "Pappadums",
    category: "extras",
    price: 3.00,
    desc: "Crispy lentil wafers (4 Pcs) served with mint chutney.",
    image: "assets/lime_slice.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },
  {
    id: 54,
    name: "Raita",
    category: "extras",
    price: 4.00,
    desc: "Cool spiced yogurt mixed with grated cucumber, carrots, and roasted cumin.",
    image: "assets/lime_slice.png",
    diets: ["veg", "halal"],
    section: "main"
  },
  {
    id: 55,
    name: "Mango Chutney",
    category: "extras",
    price: 3.00,
    desc: "Sweet and tangy mango preserve.",
    image: "assets/lime_slice.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },

  // Category: drinks
  {
    id: 56,
    name: "Mango Lassi",
    category: "drinks",
    price: 5.00,
    desc: "Traditional cold beverage blended with sweet mango pulp and yogurt.",
    image: "assets/hero.png",
    diets: ["veg"],
    section: "main"
  },
  {
    id: 57,
    name: "Masala Chai",
    category: "drinks",
    price: 4.00,
    desc: "Hot tea simmered with milk, ginger, cardamom, and aromatic spices.",
    image: "assets/mint_leaf.png",
    diets: ["veg"],
    section: "main"
  },
  {
    id: 58,
    name: "Soft Drink Can",
    category: "drinks",
    price: 4.00,
    desc: "Choice of Coca-Cola, Sprite, or Fanta can.",
    image: "assets/lime_slice.png",
    diets: ["veg", "vegan", "halal"],
    section: "main"
  },

  // Category: desserts
  {
    id: 59,
    name: "Gulab Jamun",
    category: "desserts",
    price: 6.00,
    desc: "Two soft golden milk dumplings fried and soaked in cardamom-infused sugar syrup.",
    image: "assets/lime_slice.png",
    diets: ["veg"],
    section: "main"
  },
  {
    id: 60,
    name: "Ice Cream",
    category: "desserts",
    price: 7.00,
    desc: "Two scoops of traditional Indian flavored ice cream.",
    image: "assets/lime_slice.png",
    diets: ["veg"],
    section: "main"
  }
];

// ==========================================================================
// STATE VARIABLES
// ==========================================================================
let cart = [];
let currentCategory = "all";
let activeDiets = new Set();
let reviewIndex = 0;

// Custom cursor coordinates
let mouseX = -100;
let mouseY = -100;
let cursorX = -100;
let cursorY = -100;

let FOOD_EMOJIS = ['🥟', '🥪', '🌱', '🍵', '🥗', '🥯', '🍋'];

// ==========================================================================
// DOM LOADING HANDLER
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Navigation elements
  const headerNav = document.getElementById("header-nav");
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  // Menu elements
  const menuGrid = document.getElementById("menu-grid");
  const catButtons = document.querySelectorAll(".menu-cat-btn");
  const dietButtons = document.querySelectorAll(".menu-filter-btn");

  // Testimonials elements
  const reviewsTrack = document.getElementById("reviews-track");
  const reviewSlides = document.querySelectorAll(".review-slide");
  const prevBtn = document.getElementById("review-prev");
  const nextBtn = document.getElementById("review-next");

  // Cart & Booking Modals
  const modalOverlay = document.getElementById("modal-overlay");
  const modalCloseBtn = document.getElementById("modal-close");
  const modalBody = document.getElementById("modal-body-content");
  const floatingCartBtn = document.getElementById("floating-cart");
  const cartBadge = document.getElementById("cart-badge");

  // Reservation Form
  const reservationForm = document.getElementById("reservation-form");

  // Hero Scroll elements
  const heroScrollContainer = document.querySelector(".hero-scroll-container");
  const bgSlides = document.querySelectorAll(".hero-bg-slide");
  const plates = document.querySelectorAll(".stack-plate");
  const textBlocks = document.querySelectorAll(".showcase-text-block");
  const indicators = document.querySelectorAll(".showcase-indicator");

  // Cursor elements
  const customCursor = document.getElementById("custom-cursor");
  const customCursorDot = document.getElementById("custom-cursor-dot");
  const cursorEmoji = document.getElementById("cursor-emoji");

  // ==========================================================================
  // CUSTOM CURSOR INTERACTIVITY
  // ==========================================================================
  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate custom cursor trailing lag
  function animateCursor() {
    const delay = 0.15;
    cursorX += (mouseX - cursorX) * delay;
    cursorY += (mouseY - cursorY) * delay;

    if (customCursor && customCursorDot) {
      customCursor.style.left = `${cursorX}px`;
      customCursor.style.top = `${cursorY}px`;
      
      customCursorDot.style.left = `${mouseX}px`;
      customCursorDot.style.top = `${mouseY}px`;
    }
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();

  function getRandomFoodEmoji() {
    return FOOD_EMOJIS[Math.floor(Math.random() * FOOD_EMOJIS.length)];
  }

  // Click burst effect
  document.addEventListener("click", () => {
    if (customCursor) {
      customCursor.style.transform = "translate(-50%, -50%) scale(0.8)";
      if (cursorEmoji) cursorEmoji.textContent = "💥";
      setTimeout(() => {
        customCursor.style.transform = "translate(-50%, -50%) scale(1)";
        if (cursorEmoji) cursorEmoji.textContent = getRandomFoodEmoji();
      }, 150);
    }
  });

  function setupCursorHovers() {
    const interactiveElements = document.querySelectorAll("a, button, select, input, textarea, .showcase-indicator, .menu-filter-btn, .menu-cat-btn, .menu-item-card, .stack-plate");
    
    interactiveElements.forEach(el => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
      
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });
  }

  function handleMouseEnter(e) {
    if (customCursor) customCursor.classList.add("hover");
    if (!cursorEmoji) return;

    const target = e.currentTarget;
    const text = target.textContent.toLowerCase() || target.getAttribute("alt") || "";
    const href = target.getAttribute("href");
    
    if (text.includes("vada pav")) {
      cursorEmoji.textContent = "🥪";
    } else if (text.includes("dabeli")) {
      cursorEmoji.textContent = "🥯";
    } else if (text.includes("aloo tikki") || text.includes("tikki")) {
      cursorEmoji.textContent = "🥔";
    } else if (text.includes("sandwich")) {
      cursorEmoji.textContent = "🥪";
    } else if (text.includes("samosa")) {
      cursorEmoji.textContent = "🥟";
    } else if (text.includes("curry") || text.includes("chicken")) {
      cursorEmoji.textContent = "🍛";
    } else if (text.includes("chai") || text.includes("lassi") || text.includes("drink")) {
      cursorEmoji.textContent = "🍵";
    } else if (text.includes("spicy") || target.classList.contains("badge-spicy")) {
      cursorEmoji.textContent = "🌶️";
    } else if (text.includes("vegetarian") || target.classList.contains("badge-veg")) {
      cursorEmoji.textContent = "🌱";
    } else if (target.classList.contains("add-to-cart-trigger") || target.id === "floating-cart") {
      cursorEmoji.textContent = "🛍️";
    } else if (text.includes("phone") || text.includes("+61") || (href && href.startsWith("tel:"))) {
      cursorEmoji.textContent = "📞";
    } else {
      cursorEmoji.textContent = "👉";
    }
  }

  function handleMouseLeave() {
    if (customCursor) customCursor.classList.remove("hover");
    if (cursorEmoji) cursorEmoji.textContent = getRandomFoodEmoji();
  }

  setupCursorHovers();

  document.addEventListener("mouseleave", () => {
    if (customCursor) customCursor.style.opacity = "0";
    if (customCursorDot) customCursorDot.style.opacity = "0";
  });
  document.addEventListener("mouseenter", () => {
    if (customCursor) customCursor.style.opacity = "1";
    if (customCursorDot) customCursorDot.style.opacity = "1";
  });

  // ==========================================================================
  // APPLE-STYLE EXPLODED STACK SCROLL LOGIC & PRODUCT BACKGROUND TRANSITIONS
  // ==========================================================================
  let lastActiveIndex = -1;
  let currentSlideIndex = 0;
  let isAnimatingScroll = false;
  let bypassScrollLock = false;
  let scrollTimeout = null;

  function updateHeroShowcase(progress) {
    // Determine active index based on scroll progress (0.0 to 1.0)
    // 5 slots: 0 to 4
    const activeIndex = Math.min(4, Math.floor(progress * 4.99));
    
    // 1. Update background slides opacity
    bgSlides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });

    // 2. Update centered giant plate opacity
    plates.forEach((plate, index) => {
      if (index === activeIndex) {
        plate.classList.add("active");
      } else {
        plate.classList.remove("active");
      }
    });

    // 3. Highlight text blocks
    textBlocks.forEach((block, index) => {
      if (index === activeIndex) {
        block.classList.add("active");
      } else {
        block.classList.remove("active");
      }
    });

    // 4. Highlight indicators
    indicators.forEach((ind, index) => {
      if (index === activeIndex) {
        ind.classList.add("active");
      } else {
        ind.classList.remove("active");
      }
    });

    // Set cursor emoji based on active showcase dish
    if (activeIndex !== lastActiveIndex) {
      lastActiveIndex = activeIndex;
      if (cursorEmoji) {
        if (activeIndex === 0) cursorEmoji.textContent = "🥪"; // Vada Pav
        if (activeIndex === 1) cursorEmoji.textContent = "🥯"; // Dabeli
        if (activeIndex === 2) cursorEmoji.textContent = "🥔"; // Aloo Tikki
        if (activeIndex === 3) cursorEmoji.textContent = "🥪"; // Veg Sandwich
        if (activeIndex === 4) cursorEmoji.textContent = "🥟"; // Samosa Chat
      }
    }
  }

  // Custom quad-easing smooth scroll function
  function animateScrollTo(targetY, duration = 800, callback) {
    if (isAnimatingScroll) return;
    isAnimatingScroll = true;
    
    const startY = window.scrollY;
    const difference = targetY - startY;
    const startTime = performance.now();
    
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    
    function animate(currentTime) {
      const timeElapsed = currentTime - startTime;
      if (timeElapsed < duration) {
        const run = easeInOutQuad(timeElapsed, startY, difference, duration);
        window.scrollTo(0, run);
        requestAnimationFrame(animate);
      } else {
        window.scrollTo(0, targetY);
        isAnimatingScroll = false;
        if (callback) callback();
      }
    }
    
    requestAnimationFrame(animate);
  }

  // Wheel listener for Desktop scroll snap & lock
  window.addEventListener("wheel", (e) => {
    if (bypassScrollLock) return;
    
    const scrollY = window.scrollY;
    const step = window.innerHeight;
    const heroMaxScroll = 4 * step;
    
    // Check if we are inside the scroll-locked hero zone
    if (scrollY <= heroMaxScroll) {
      const direction = e.deltaY > 0 ? 1 : -1;
      let targetIndex = currentSlideIndex + direction;
      
      // Lock and transition steps
      if ((direction === 1 && targetIndex <= 4) || (direction === -1 && targetIndex >= 0)) {
        e.preventDefault();
        
        if (!isAnimatingScroll) {
          currentSlideIndex = targetIndex;
          animateScrollTo(currentSlideIndex * step, 750);
        }
      }
    } else if (scrollY > heroMaxScroll && scrollY <= heroMaxScroll + window.innerHeight * 0.15) {
      // Re-lock when scrolling back up into hero
      const direction = e.deltaY > 0 ? 1 : -1;
      if (direction === -1) {
        e.preventDefault();
        if (!isAnimatingScroll) {
          currentSlideIndex = 4;
          animateScrollTo(4 * step, 750);
        }
      }
    }
  }, { passive: false });

  // Touch gesture listeners for Mobile scroll snap & lock
  let touchStartY = 0;
  
  window.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });
  
  window.addEventListener("touchmove", (e) => {
    if (bypassScrollLock) return;
    
    const scrollY = window.scrollY;
    const step = window.innerHeight;
    const heroMaxScroll = 4 * step;
    
    if (scrollY <= heroMaxScroll) {
      const touchY = e.touches[0].clientY;
      const diffY = touchStartY - touchY; // positive = scroll down, negative = scroll up
      
      if (Math.abs(diffY) > 20) { // threshold
        const direction = diffY > 0 ? 1 : -1;
        let targetIndex = currentSlideIndex + direction;
        
        if ((direction === 1 && targetIndex <= 4) || (direction === -1 && targetIndex >= 0)) {
          e.preventDefault();
          
          if (!isAnimatingScroll) {
            currentSlideIndex = targetIndex;
            animateScrollTo(currentSlideIndex * step, 750);
            // Reset touchStartY to current Y to avoid continuous firing in same swipe
            touchStartY = touchY;
          }
        }
      }
    } else if (scrollY > heroMaxScroll && scrollY <= heroMaxScroll + window.innerHeight * 0.15) {
      const touchY = e.touches[0].clientY;
      const diffY = touchStartY - touchY;
      if (diffY < 0 && Math.abs(diffY) > 20) { // scrolling up
        e.preventDefault();
        if (!isAnimatingScroll) {
          currentSlideIndex = 4;
          animateScrollTo(4 * step, 750);
        }
      }
    }
  }, { passive: false });

  // Scroll listener to update progress values and keep state in sync
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const step = window.innerHeight;
    const heroMaxScroll = 4 * step;
    
    // Update progress (0.0 to 1.0)
    let progress = scrollY / heroMaxScroll;
    progress = Math.max(0, Math.min(1, progress));
    updateHeroShowcase(progress);
    
    // Keep currentSlideIndex in sync when user is not animating (e.g. initial load or link jumps)
    if (!isAnimatingScroll) {
      const index = Math.round(scrollY / step);
      if (index >= 0 && index <= 4) {
        currentSlideIndex = index;
      }
    }

    // Scroll styling for Header Nav
    if (scrollY > 50) {
      headerNav.classList.add("scrolled");
    } else {
      headerNav.classList.remove("scrolled");
    }

    // Auto-hide navigation bar when scroll starts inside the hero section
    if (scrollY > 15 && scrollY <= heroMaxScroll - 20) {
      headerNav.classList.add("hidden-header");
    } else {
      headerNav.classList.remove("hidden-header");
    }
  });

  // Handle window resizing and maintain active slide position alignment
  window.addEventListener("resize", () => {
    const scrollY = window.scrollY;
    const step = window.innerHeight;
    const heroMaxScroll = 4 * step;
    
    if (scrollY <= heroMaxScroll + 10) {
      window.scrollTo(0, currentSlideIndex * step);
    }
    
    let progress = Math.max(0, Math.min(1, window.scrollY / heroMaxScroll));
    updateHeroShowcase(progress);
  });

  // Setup initial view
  updateHeroShowcase(0);

  // Indicators trigger scroll positioning using animateScrollTo
  indicators.forEach((ind, index) => {
    ind.addEventListener("click", () => {
      if (isAnimatingScroll) return;
      currentSlideIndex = index;
      animateScrollTo(index * window.innerHeight, 750);
    });
  });

  // ==========================================================================
  // NAVIGATION LOGIC
  // ==========================================================================
  
  // Mobile menu toggle
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = navToggle.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-times");
      }
    });
  }

  // Smooth scroll & close mobile menu on click, bypassing scroll lock during jump
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId) return;
      
      // If it's a telephone link or external link, close mobile menu and let browser proceed
      if (!targetId.startsWith("#")) {
        navMenu.classList.remove("open");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
        return;
      }
      
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
      
      if (targetSection) {
        navMenu.classList.remove("open");
        const icon = navToggle.querySelector("i");
        if (icon) {
          icon.classList.add("fa-bars");
          icon.classList.remove("fa-times");
        }
        
        bypassScrollLock = true;
        isAnimatingScroll = true;
        
        const targetScrollPos = targetSection.offsetTop - 80;
        
        window.scrollTo({
          top: targetScrollPos,
          behavior: "smooth"
        });
        
        // Polling scroll position to detect completion
        if (scrollTimeout) clearTimeout(scrollTimeout);
        
        const checkScrollEnd = setInterval(() => {
          if (Math.abs(window.scrollY - targetScrollPos) < 4) {
            clearInterval(checkScrollEnd);
            clearTimeout(scrollTimeout);
            bypassScrollLock = false;
            isAnimatingScroll = false;
          }
        }, 50);
        
        // Timeout fallback
        scrollTimeout = setTimeout(() => {
          clearInterval(checkScrollEnd);
          bypassScrollLock = false;
          isAnimatingScroll = false;
        }, 1200);
      }
    });
  });

  // ==========================================================================
  // DUAL-VIEW MENU DASHBOARD SYSTEM
  // ==========================================================================
  let activeMenuTab = "nasta";
  let activeMainCategory = "special-curries";

  const CATEGORIES = [
    { id: 'starters', name: 'Starters', icon: 'fa-utensils' },
    { id: 'special-curries', name: 'Gujju Special Curries', icon: 'fa-pepper-hot' },
    { id: 'snacks', name: 'Snacks', icon: 'fa-cookie' },
    { id: 'veg-curries', name: 'Vegetarian Curries', icon: 'fa-leaf' },
    { id: 'nonveg-curries', name: 'Non-Vegetarian Curries', icon: 'fa-drumstick-bite' },
    { id: 'breads', name: 'Breads', icon: 'fa-wheat-awn' },
    { id: 'rice', name: 'Rice', icon: 'fa-bowl-rice' },
    { id: 'salad', name: 'Salad', icon: 'fa-carrot' },
    { id: 'extras', name: 'Extras', icon: 'fa-plus-circle' },
    { id: 'drinks', name: 'Soft Drinks / Juice', icon: 'fa-glass-water' },
    { id: 'desserts', name: 'Desserts', icon: 'fa-ice-cream' }
  ];

  function renderNastaBoard() {
    const panels = {
      "nasta-specials": document.getElementById("panel-nasta-specials"),
      "chat-corner": document.getElementById("panel-chat-corner"),
      "sandwich-hub": document.getElementById("panel-sandwich-hub"),
      "fries-bites": document.getElementById("panel-fries-bites"),
      "chai-snacks": document.getElementById("panel-chai-snacks")
    };

    if (!panels["nasta-specials"]) return;

    const nastaFilteredItems = MENU_ITEMS.filter(item => {
      if (item.section !== "nasta") return false;
      if (document.body.classList.contains("theme-veg") && !item.diets.includes("veg")) {
        return false;
      }
      return true;
    });

    Object.keys(panels).forEach(key => {
      if (panels[key]) panels[key].innerHTML = "";
    });

    nastaFilteredItems.forEach(item => {
      const row = document.createElement("div");
      row.className = "nasta-item-row";
      row.innerHTML = `
        <img src="${item.image}" class="nasta-item-avatar" alt="${item.name}" loading="lazy">
        <div class="nasta-item-details">
          <span class="nasta-item-name">${item.name}</span>
          <span class="nasta-item-dots"></span>
          <span class="nasta-item-price">$${item.price.toFixed(2)}</span>
        </div>
        <button class="nasta-item-add add-to-cart-trigger" data-id="${item.id}" aria-label="Add ${item.name} to order">
          <i class="fas fa-plus"></i>
        </button>
      `;

      if (panels[item.category]) {
        panels[item.category].appendChild(row);
      }
    });

    bindCartTriggers();
    setupCursorHovers();
  }

  function renderMainMenu() {
    const sidebarCategoryList = document.getElementById("sidebar-category-list");
    const contentItemsList = document.getElementById("content-items-list");
    const contentCategoryTitle = document.getElementById("content-category-title");

    if (!sidebarCategoryList) return;

    const mainFilteredItems = MENU_ITEMS.filter(item => {
      if (item.section !== "main") return false;
      if (document.body.classList.contains("theme-veg") && !item.diets.includes("veg")) {
        return false;
      }
      return true;
    });

    const activeHasItems = mainFilteredItems.some(item => item.category === activeMainCategory);
    if (!activeHasItems) {
      const firstAvailable = CATEGORIES.find(cat => mainFilteredItems.some(item => item.category === cat.id));
      if (firstAvailable) {
        activeMainCategory = firstAvailable.id;
      }
    }

    sidebarCategoryList.innerHTML = "";
    CATEGORIES.forEach(cat => {
      const hasItems = mainFilteredItems.some(item => item.category === cat.id);
      if (!hasItems) return;

      const li = document.createElement("li");
      li.className = `sidebar-category-item${activeMainCategory === cat.id ? ' active' : ''}`;
      li.innerHTML = `<i class="fas ${cat.icon}"></i> ${cat.name}`;
      li.addEventListener("click", () => {
        activeMainCategory = cat.id;
        renderMainMenu();
      });
      sidebarCategoryList.appendChild(li);
    });

    const currentCatInfo = CATEGORIES.find(c => c.id === activeMainCategory);
    if (contentCategoryTitle) {
      contentCategoryTitle.textContent = currentCatInfo ? currentCatInfo.name : "Menu";
    }

    contentItemsList.innerHTML = "";
    const categoryItems = mainFilteredItems.filter(item => item.category === activeMainCategory);

    if (categoryItems.length === 0) {
      contentItemsList.innerHTML = `<p style="padding: 20px; color: var(--text-muted);">No items available in this category.</p>`;
      return;
    }

    categoryItems.forEach(item => {
      const isVeg = item.diets.includes("veg");
      const dotClass = isVeg ? "veg" : "nonveg";

      const row = document.createElement("div");
      row.className = "menu-item-row-main";
      row.innerHTML = `
        <img src="${item.image}" class="menu-item-img-main" alt="${item.name}" loading="lazy">
        <div class="menu-item-info-main">
          <div class="menu-item-title-row-main">
            <span class="diet-indicator-dot ${dotClass}"></span>
            <h4 class="menu-item-name-main">${item.name}</h4>
          </div>
          <p class="menu-item-desc-main">${item.desc}</p>
        </div>
        <div class="menu-item-action-main">
          <span class="menu-item-price-main">$${item.price.toFixed(2)}</span>
          <button class="btn btn-primary btn-sm add-to-cart-trigger" data-id="${item.id}">
            <i class="fas fa-plus-circle"></i> Add
          </button>
        </div>
      `;
      contentItemsList.appendChild(row);
    });

    // Render dynamic category cards at the bottom (Image 4 Style)
    const categoriesGrid = document.getElementById("menu-categories-grid");
    if (categoriesGrid) {
      categoriesGrid.innerHTML = "";
      
      const GRID_CATEGORIES = [
        { id: 'snacks', name: 'Snacks', subtitle: 'Crispy, Chatpata & Always Fresh', image: 'assets/vada_pav.png' },
        { id: 'veg-curries', name: 'Vegetarian Curries', subtitle: 'Aromatic & Full of Flavor', image: 'assets/aloo_tikki_chaat.png' },
        { id: 'nonveg-curries', name: 'Non-Vegetarian Curries', subtitle: 'Rich, Spicy & Satisfying', image: 'assets/butter_chicken.png' },
        { id: 'breads', name: 'Breads', subtitle: 'Soft, Fresh & Made to Order', image: 'assets/hero.png' },
        { id: 'rice', name: 'Rice', subtitle: 'Fragrant & Perfectly Cooked', image: 'assets/bg_up.png' },
        { id: 'salad', name: 'Salad', subtitle: 'Healthy, Crunchy & Full of Goodness', image: 'assets/veg_sandwich.png' },
        { id: 'extras', name: 'Extras', subtitle: 'Add more to your meal', image: 'assets/lime_slice.png' },
        { id: 'drinks', name: 'Soft Drinks / Juice', subtitle: 'Refreshing & Energizing', image: 'assets/mint_leaf.png' }
      ];

      GRID_CATEGORIES.forEach(cat => {
        // Only show if category has any active items in current theme mode
        const hasItems = mainFilteredItems.some(item => item.category === cat.id);
        if (!hasItems) return;

        const card = document.createElement("div");
        card.className = `category-card${activeMainCategory === cat.id ? ' active' : ''}`;
        card.innerHTML = `
          <div class="category-card-img-wrap">
            <img src="${cat.image}" alt="${cat.name}" loading="lazy">
          </div>
          <div class="category-card-info">
            <h5 class="category-card-title">${cat.name}</h5>
            <p class="category-card-subtitle">${cat.subtitle}</p>
          </div>
        `;
        card.addEventListener("click", () => {
          activeMainCategory = cat.id;
          renderMainMenu();
          // Scroll smoothly to active menu category title
          const titleEl = document.getElementById("content-category-title");
          if (titleEl) {
            titleEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        });
        categoriesGrid.appendChild(card);
      });
    }

    bindCartTriggers();
    setupCursorHovers();
  }

  function bindCartTriggers() {
    document.querySelectorAll(".add-to-cart-trigger").forEach(btn => {
      btn.removeEventListener("click", handleAddClick);
      btn.addEventListener("click", handleAddClick);
    });
  }

  function handleAddClick(e) {
    const btn = e.currentTarget;
    const itemId = parseInt(btn.getAttribute("data-id"));
    addToCart(itemId);
  }

  // Setup tab switches
  const tabNasta = document.getElementById("tab-nasta-house");
  const tabMainMenu = document.getElementById("tab-main-menu");
  const viewNasta = document.getElementById("nasta-board-view");
  const viewMainMenu = document.getElementById("main-menu-view");

  if (tabNasta && tabMainMenu) {
    tabNasta.addEventListener("click", () => {
      tabNasta.classList.add("active");
      tabMainMenu.classList.remove("active");
      viewNasta.classList.add("active");
      viewMainMenu.classList.remove("active");
      activeMenuTab = "nasta";
      renderNastaBoard();
    });

    tabMainMenu.addEventListener("click", () => {
      tabMainMenu.classList.add("active");
      tabNasta.classList.remove("active");
      viewMainMenu.classList.add("active");
      viewNasta.classList.remove("active");
      activeMenuTab = "main";
      renderMainMenu();
    });
  }

  // Initial renders
  renderNastaBoard();
  renderMainMenu();

  // ==========================================================================
  // CART / TAKEAWAY SIMULATION
  // ==========================================================================
  function addToCart(id) {
    const item = MENU_ITEMS.find(i => i.id === id);
    if (!item) return;

    const existingItem = cart.find(cartItem => cartItem.id === id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    
    floatingCartBtn.style.transform = "scale(1.2)";
    setTimeout(() => {
      floatingCartBtn.style.transform = "scale(1)";
    }, 200);
  }

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    cartBadge.textContent = totalItems;
    
    if (totalItems > 0) {
      floatingCartBtn.classList.add("active");
    } else {
      floatingCartBtn.classList.remove("active");
    }
  }

  function openCartModal() {
    modalBody.innerHTML = "";
    
    if (cart.length === 0) {
      modalBody.innerHTML = `
        <h3 class="modal-title">Your Order</h3>
        <p class="modal-desc" style="color: var(--text-secondary);">Your basket is currently empty. Head over to our street food menu to add delicious items!</p>
        <button class="btn btn-primary" id="close-empty-cart-btn" style="width:100%;">Continue Browsing</button>
      `;
      document.getElementById("close-empty-cart-btn").addEventListener("click", closeActiveModal);
      setupCursorHovers();
      openModalOverlay();
      return;
    }

    let cartListHTML = `<div class="cart-items-list">`;
    let subtotal = 0;

    cart.forEach(item => {
      const itemTotal = item.price * item.qty;
      subtotal += itemTotal;
      cartListHTML += `
        <div class="cart-item">
          <div>
            <div class="cart-item-name">${item.name}</div>
            <div class="cart-item-qty">Qty: ${item.qty} × $${item.price.toFixed(2)}</div>
          </div>
          <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
        </div>
      `;
    });
    cartListHTML += `</div>`;

    modalBody.innerHTML = `
      <h3 class="modal-title">Review Takeaway Order</h3>
      <p class="modal-desc" style="margin-bottom:12px; font-size:0.85rem; color: var(--color-marigold);">
        <i class="fas fa-check-circle"></i> 100% Authentic Indian & Halal
      </p>
      ${cartListHTML}
      <div class="cart-total-row">
        <span>Order Total</span>
        <span class="cart-total-val">$${subtotal.toFixed(2)}</span>
      </div>
      
      <form id="takeaway-checkout-form" class="reservation-form">
        <div class="form-group">
          <label class="form-label" for="checkout-name">Your Name</label>
          <input class="form-input" type="text" id="checkout-name" required placeholder="Enter your full name">
        </div>
        <div class="form-group-row">
          <div class="form-group">
            <label class="form-label" for="checkout-phone">Phone Number</label>
            <input class="form-input" type="tel" id="checkout-phone" required placeholder="04XX XXX XXX">
          </div>
          <div class="form-group">
            <label class="form-label" for="checkout-time">Pickup Time</label>
            <input class="form-input" type="time" id="checkout-time" required>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" style="margin-top:16px;">
          <i class="fas fa-paper-plane" style="margin-right:8px;"></i> Place Takeaway Order
        </button>
      </form>
    `;

    const checkoutForm = document.getElementById("takeaway-checkout-form");
    if (checkoutForm) {
      checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const userName = document.getElementById("checkout-name").value;
        const pickupTime = document.getElementById("checkout-time").value;
        
        modalBody.innerHTML = `
          <div class="text-center" style="padding: 20px 0;">
            <i class="fas fa-check-circle" style="font-size: 4rem; color: var(--color-card-badge); margin-bottom: 24px;"></i>
            <h3 class="modal-title" style="border-bottom:none; margin-bottom: 12px;">Order Placed Successfully!</h3>
            <p style="color: var(--text-secondary); margin-bottom: 24px;">
              Thank you, <strong>${userName}</strong>. Your delicious Indian street food order is being prepared and will be ready for pickup at <strong>${pickupTime}</strong> at our Moonah branch (38 Bowen Road).
            </p>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px;">
              For quick support or changes, call us: <a href="tel:+61435351442" style="color: var(--color-marigold); text-decoration: underline;">+61 435 351 442</a>
            </p>
            <button class="btn btn-primary" id="success-close-btn" style="width: 100%;">Return to Home</button>
          </div>
        `;
        cart = [];
        updateCartUI();
        document.getElementById("success-close-btn").addEventListener("click", closeActiveModal);
        setupCursorHovers();
      });
    }

    setupCursorHovers();
    openModalOverlay();
  }

  function openModalOverlay() {
    modalOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeActiveModal() {
    modalOverlay.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (floatingCartBtn) {
    floatingCartBtn.addEventListener("click", openCartModal);
  }
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeActiveModal);
  }
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeActiveModal();
      }
    });
  }

  // ==========================================================================
  // TABLE RESERVATION SUBMIT LOGIC
  // ==========================================================================
  if (reservationForm) {
    reservationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("reserve-name").value;
      const guests = document.getElementById("reserve-guests").value;
      const date = document.getElementById("reserve-date").value;
      const time = document.getElementById("reserve-time").value;

      modalBody.innerHTML = `
        <div class="text-center" style="padding: 20px 0;">
          <i class="fas fa-calendar-check" style="font-size: 4rem; color: var(--color-marigold); margin-bottom: 24px;"></i>
          <h3 class="modal-title" style="border-bottom:none; margin-bottom: 12px;">Table Reserved!</h3>
          <p style="color: var(--text-secondary); margin-bottom: 24px;">
            Namaste <strong>${name}</strong>, your table booking for <strong>${guests} guests</strong> on <strong>${date}</strong> at <strong>${time}</strong> has been secured. We look forward to hosting you!
          </p>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 24px;">
            Location: 38 Bowen Road, Moonah, Hobart, TAS 7009
          </p>
          <button class="btn btn-primary" id="reserve-ok-btn" style="width: 100%;">Fantastic!</button>
        </div>
      `;
      openModalOverlay();
      document.getElementById("reserve-ok-btn").addEventListener("click", closeActiveModal);
      setupCursorHovers();
      reservationForm.reset();
    });
  }

  // ==========================================================================
  // TESTIMONIALS SLIDER / CAROUSEL
  // ==========================================================================
  function updateReviewsSlider() {
    const slideWidth = reviewSlides[0].offsetWidth;
    reviewsTrack.style.transform = `translateX(-${reviewIndex * slideWidth}px)`;
  }

  if (nextBtn && prevBtn && reviewsTrack) {
    nextBtn.addEventListener("click", () => {
      reviewIndex = (reviewIndex + 1) % reviewSlides.length;
      updateReviewsSlider();
    });

    prevBtn.addEventListener("click", () => {
      reviewIndex = (reviewIndex - 1 + reviewSlides.length) % reviewSlides.length;
      updateReviewsSlider();
    });

    window.addEventListener("resize", updateReviewsSlider);
  }

  // ==========================================================================
  // DIET SWITCHER & LIVING BACKGROUND THEME CONTROLLER
  // ==========================================================================
  const dietThemeToggle = document.getElementById("diet-theme-toggle");

  function updateThemeState() {
    if (!dietThemeToggle) return;
    
    if (dietThemeToggle.checked) {
      // VEG THEME active
      document.body.classList.add("theme-veg");
      document.body.classList.remove("theme-nonveg");
      
      // Update custom cursor emojis
      FOOD_EMOJIS = ['🥟', '🥪', '🌱', '🍵', '🥗', '🥯', '🍋'];
      
      // Render both views to apply Veg filters
      renderNastaBoard();
      renderMainMenu();
    } else {
      // NON-VEG THEME active (Show All)
      document.body.classList.add("theme-nonveg");
      document.body.classList.remove("theme-veg");
      
      // Update custom cursor emojis
      FOOD_EMOJIS = ['🍖', '🍗', '🍛', '🌶️', '🔥', '🧄', '🧅'];
      
      // Render both views to show all items
      renderNastaBoard();
      renderMainMenu();
    }
    
    // Refresh cursor hover bindings and update cursor emoji immediately
    setupCursorHovers();
    if (cursorEmoji) cursorEmoji.textContent = getRandomFoodEmoji();
  }

  if (dietThemeToggle) {
    // Listen for theme switch clicks
    dietThemeToggle.addEventListener("change", updateThemeState);
    
    // Set initial theme state on page load
    updateThemeState();
  } else {
    // Fallback default
    document.body.classList.add("theme-veg");
  }
});

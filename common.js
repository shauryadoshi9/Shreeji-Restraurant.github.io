// Common Menu Data (Shared across pages)
const menuItems = [
    // --- VEGETARIAN (55 Items) ---
    // Starters - Veg (12)
    { id: 1, name: "Paneer Tikka", price: 180, category: "Starters", type: "veg", image: "images/paneer_tikka.png" },
    { id: 2, name: "Veg Manchurian", price: 150, category: "Starters", type: "veg", image: "images/soup.png" },
    { id: 3, name: "Hara Bhara Kabab", price: 140, category: "Starters", type: "veg", image: "images/hero.png" },
    { id: 4, name: "Veg Spring Roll", price: 130, category: "Starters", type: "veg", image: "images/hero.png" },
    { id: 48, name: "Crispy Corn", price: 160, category: "Starters", type: "veg", image: "images/hero.png" },
    { id: 49, name: "Paneer 65", price: 190, category: "Starters", type: "veg", image: "images/paneer_tikka.png" },
    { id: 50, name: "Veg Lollipop", price: 150, category: "Starters", type: "veg", image: "images/hero.png" },
    { id: 51, name: "Mushroom Tikka", price: 200, category: "Starters", type: "veg", image: "images/hero.png" },
    { id: 52, name: "Corn Cheese Balls", price: 170, category: "Starters", type: "veg", image: "images/hero.png" },
    { id: 53, name: "Dahi Ke Kabab", price: 180, category: "Starters", type: "veg", image: "images/hero.png" },
    { id: 54, name: "Paneer Malai Tikka", price: 210, category: "Starters", type: "veg", image: "images/paneer_tikka.png" },
    { id: 55, name: "Veg Seekh Kabab", price: 160, category: "Starters", type: "veg", image: "images/hero.png" },

    // Soups - Veg (6)
    { id: 9, name: "Tomato Soup", price: 90, category: "Soups", type: "veg", image: "images/soup.png" },
    { id: 10, name: "Sweet Corn Soup", price: 100, category: "Soups", type: "veg", image: "images/soup.png" },
    { id: 11, name: "Hot & Sour Soup", price: 110, category: "Soups", type: "veg", image: "images/soup.png" },
    { id: 56, name: "Lemon Coriander Soup", price: 95, category: "Soups", type: "veg", image: "images/soup.png" },
    { id: 57, name: "Manchow Soup", price: 105, category: "Soups", type: "veg", image: "images/soup.png" },
    { id: 58, name: "Clear Veg Soup", price: 85, category: "Soups", type: "veg", image: "images/soup.png" },

    // Curry - Veg (12)
    { id: 28, name: "Paneer Butter Masala", price: 220, category: "Curry", type: "veg", image: "images/paneer_tikka.png" },
    { id: 29, name: "Kadai Paneer", price: 210, category: "Curry", type: "veg", image: "images/paneer_tikka.png" },
    { id: 30, name: "Mix Veg", price: 180, category: "Curry", type: "veg", image: "images/hero.png" },
    { id: 31, name: "Aloo Gobi", price: 160, category: "Curry", type: "veg", image: "images/hero.png" },
    { id: 32, name: "Palak Paneer", price: 210, category: "Curry", type: "veg", image: "images/paneer_tikka.png" },
    { id: 59, name: "Malai Kofta", price: 240, category: "Curry", type: "veg", image: "images/hero.png" },
    { id: 60, name: "Mushroom Masala", price: 200, category: "Curry", type: "veg", image: "images/hero.png" },
    { id: 61, name: "Veg Kolhapuri", price: 190, category: "Curry", type: "veg", image: "images/hero.png" },
    { id: 62, name: "Paneer Lababdar", price: 230, category: "Curry", type: "veg", image: "images/paneer_tikka.png" },
    { id: 63, name: "Methi Matar Malai", price: 210, category: "Curry", type: "veg", image: "images/hero.png" },
    { id: 64, name: "Dum Aloo", price: 170, category: "Curry", type: "veg", image: "images/hero.png" },
    { id: 65, name: "Shahi Paneer", price: 220, category: "Curry", type: "veg", image: "images/paneer_tikka.png" },

    // Chappati / Breads - Veg (5)
    { id: 23, name: "Plain Chapati", price: 20, category: "Chappati", type: "veg", image: "images/hero.png" },
    { id: 24, name: "Butter Roti", price: 30, category: "Chappati", type: "veg", image: "images/hero.png" },
    { id: 25, name: "Tandoori Roti", price: 25, category: "Chappati", type: "veg", image: "images/hero.png" },
    { id: 26, name: "Butter Naan", price: 40, category: "Chappati", type: "veg", image: "images/hero.png" },
    { id: 27, name: "Garlic Naan", price: 50, category: "Chappati", type: "veg", image: "images/hero.png" },

    // Rice - Veg (10)
    { id: 40, name: "Plain Rice", price: 120, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 41, name: "Jeera Rice", price: 150, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 42, name: "Veg Biryani", price: 200, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 66, name: "Matar Pulav", price: 160, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 67, name: "Veg Hyderabadi Biryani", price: 220, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 68, name: "Paneer Biryani", price: 230, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 69, name: "Lemon Rice", price: 140, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 70, name: "Curd Rice", price: 130, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 71, name: "Kashmiri Pulav", price: 190, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },
    { id: 72, name: "Veg Fried Rice", price: 170, category: "Rice", type: "veg", image: "images/chicken_biryani.png" },

    // Desserts - Veg (10)
    { id: 45, name: "Gulab Jamun", price: 80, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 46, name: "Ice Cream", price: 90, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 47, name: "Rasmalai", price: 100, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 73, name: "Gajar Ka Halwa", price: 120, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 74, name: "Kheer", price: 90, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 75, name: "Chocolate Brownie", price: 150, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 76, name: "Moong Dal Halwa", price: 130, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 77, name: "Fruit Salad", price: 110, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 78, name: "Paan Ice Cream", price: 100, category: "Desserts", type: "veg", image: "images/dessert.png" },
    { id: 79, name: "Sizzling Brownie", price: 180, category: "Desserts", type: "veg", image: "images/dessert.png" },

    // --- NON-VEGETARIAN (50 Items) ---
    // Starters - Non-Veg (15)
    { id: 5, name: "Chicken Tikka", price: 220, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 6, name: "Chicken Lollipop", price: 200, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 7, name: "Fish Fry", price: 240, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 8, name: "Chicken Manchurian", price: 210, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 80, name: "Chicken 65", price: 220, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 81, name: "Egg Bonda", price: 120, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 82, name: "Chicken Seekh Kabab", price: 230, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 83, name: "Mutton Seekh Kabab", price: 280, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 84, name: "Fish Fingers", price: 250, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 85, name: "Prawns Fry", price: 290, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 86, name: "Chicken Wings", price: 210, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 87, name: "Tandoori Chicken (Half)", price: 260, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 88, name: "Tandoori Chicken (Full)", price: 480, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 89, name: "Afghani Chicken", price: 270, category: "Starters", type: "non-veg", image: "images/hero.png" },
    { id: 90, name: "Mutton Roast", price: 320, category: "Starters", type: "non-veg", image: "images/hero.png" },

    // Soups - Non-Veg (5)
    { id: 12, name: "Chicken Soup", price: 120, category: "Soups", type: "non-veg", image: "images/soup.png" },
    { id: 13, name: "Chicken Hot & Sour", price: 130, category: "Soups", type: "non-veg", image: "images/soup.png" },
    { id: 91, name: "Mutton Bone Soup", price: 160, category: "Soups", type: "non-veg", image: "images/soup.png" },
    { id: 92, name: "Seafood Soup", price: 170, category: "Soups", type: "non-veg", image: "images/soup.png" },
    { id: 93, name: "Chicken Clear Soup", price: 110, category: "Soups", type: "non-veg", image: "images/soup.png" },

    // Curry - Non-Veg (15)
    { id: 33, name: "Butter Chicken", price: 260, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 34, name: "Chicken Curry", price: 240, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 35, name: "Chicken Kadai", price: 250, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 36, name: "Fish Curry", price: 270, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 94, name: "Mutton Rogan Josh", price: 340, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 95, name: "Chicken Masala", price: 240, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 96, name: "Egg Curry", price: 160, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 97, name: "Mutton Rara", price: 350, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 98, name: "Chicken Do Pyaza", price: 250, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 99, name: "Prawns Masala", price: 310, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 100, name: "Chicken Bhuna", price: 260, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 101, name: "Mutton Korma", price: 330, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 102, name: "Handi Chicken", price: 270, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 103, name: "Fish Masala", price: 280, category: "Curry", type: "non-veg", image: "images/hero.png" },
    { id: 104, name: "Chicken Korma", price: 260, category: "Curry", type: "non-veg", image: "images/hero.png" },

    // Rice - Non-Veg (15)
    { id: 43, name: "Chicken Biryani", price: 240, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 44, name: "Egg Biryani", price: 210, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 105, name: "Mutton Biryani", price: 320, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 106, name: "Fish Biryani", price: 280, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 107, name: "Prawns Biryani", price: 340, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 108, name: "Chicken Tikka Biryani", price: 270, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 109, name: "Chicken Fried Rice", price: 190, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 110, name: "Egg Fried Rice", price: 160, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 111, name: "Prawns Fried Rice", price: 220, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 112, name: "Chicken Schezwan Rice", price: 200, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 113, name: "Special Mutton Biryani", price: 450, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 114, name: "Chicken Pulav", price: 210, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 115, name: "Egg Pulav", price: 180, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 116, name: "Kundan Chicken Biryani", price: 280, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
    { id: 117, name: "Chicken Kabsa", price: 350, category: "Rice", type: "non-veg", image: "images/chicken_biryani.png" },
];

// Utility: Cart Management using LocalStorage
const CartManager = {
    getCart() {
        const cart = localStorage.getItem('shreeji_cart');
        return cart ? JSON.parse(cart) : [];
    },
    
    saveCart(cart) {
        localStorage.setItem('shreeji_cart', JSON.stringify(cart));
        this.updateBadge();
    },
    
    addToCart(item) {
        const cart = this.getCart();
        cart.push(item);
        this.saveCart(cart);
    },
    
    removeFromCart(index) {
        const cart = this.getCart();
        cart.splice(index, 1);
        this.saveCart(cart);
    },
    
    clearCart() {
        localStorage.removeItem('shreeji_cart');
        this.updateBadge();
    },
    
    updateBadge() {
        const cart = this.getCart();
        const count = cart.length;
        const badge = document.getElementById('cartCounter');
        if (badge) badge.innerText = count;
    }
};

// Dietary Preference Persistance
const PreferenceManager = {
    setPreference(type) {
        localStorage.setItem('shreeji_diet', type);
    },
    getPreference() {
        return localStorage.getItem('shreeji_diet') || 'all';
    }
};

// Initialize common UI
document.addEventListener('DOMContentLoaded', () => {
    CartManager.updateBadge();
});

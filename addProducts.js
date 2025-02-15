const { db } = require("./firebase"); // Import Firestore
const { collection, addDoc } = require("firebase/firestore");

// Function to add products to Firestore
const addProducts = async () => {
  const products = [
    {
      id: 189,
      name: "🟡HONDA CIVIC Type R🟡",
      description: "Compact performance with incredible handling and style.",
      price: 180.0,
      image: "https://example.com/product1.jpg",
      emailPasswords: [
        { id: 1, email: "user1@example.com", password: "pass1", assigned: false },
        { id: 2, email: "user1b@example.com", password: "pass1b", assigned: false }
      ]
    },
    {
      id: 2,
      name: "🔴ACURA NSX🔴",
      description: "Precision engineering in a hybrid supercar with stunning looks.",
      price: 400.0,
      image: "https://example.com/product2.jpg",
      emailPasswords: [
        { id: 3, email: "user2@example.com", password: "pass2", assigned: false },
        { id: 4, email: "user2b@example.com", password: "pass2b", assigned: false }
      ]
    },
    {
      id: 3,
      name: "🟢BMW M3🟢",
      description: "A true performance icon, combining luxury with extreme power.",
      price: 320.0,
      image: "https://example.com/product3.jpg",
      emailPasswords: [
        { id: 5, email: "user3@example.com", password: "pass3", assigned: false },
        { id: 6, email: "user3b@example.com", password: "pass3b", assigned: false }
      ]
    }
  ];

  try {
    for (const product of products) {
      const docRef = await addDoc(collection(db, "products"), product);
      console.log(`Product "${product.name}" added with ID: ${docRef.id}`);
    }
  } catch (error) {
    console.error("Error adding products:", error);
  }
};

// Call the function to add products
addProducts();
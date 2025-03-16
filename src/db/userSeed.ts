import pool from "../config/db";

// Array of users to insert
const users = [
  { email: 'vitaliykorzenkoua@gmail.com', phone: '+380669947651', age: '30', isActive: true },
  { email: 'vitaliykorzhenkouapr@gmail.com', phone: '+380669947651', age: '30', isActive: false },
  // Add user data here
];

// Function to insert users into the database
const seedUsers = async () => {
  try {
    for (const user of users) {
      const query = `
        INSERT INTO users (email, phone, age, "isActive", created_at)
        VALUES ($1, $2, $3, $4, NOW())
      `;
      const values = [user.email, user.phone, user.age, user.isActive];

      await pool.query(query, values);
      console.log(`User ${user.email} added successfully`);
    }
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

// Export function for use in other files
export default seedUsers;

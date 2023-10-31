export default class queryRepository {
  constructor(private database) {}

  // Retrieve a user by their ID
  findById(id: string) {
    return this.database.findById(id);
  }

  // Add a new user
  create(user) {
    return this.database.create(user);
  }

  // Update an existing user
  update(user) {
    return this.database.findByIdAndUpdate(user.id, user);
  }

  // Delete a user
  delete(id: string) {
    return this.database.findByIdAndDelete(id);
  }
}

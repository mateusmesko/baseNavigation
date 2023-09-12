export default class Task {
    constructor(id, title, description, completed) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.completed = completed;
    }

    newTaskFunction(value) {
        console.log('teste dento da tesk', value)
    }
}

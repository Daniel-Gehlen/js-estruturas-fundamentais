let todoList = {
    tasks: ['Read a book', 'To do exercises', 'Learn a new language'],
    [Symbol.iterator]: function* () {
        for (let task of this.tasks) {
            console.log(`Concluding the task: ${task}`);
            yield task;
        }
    }
};

for (let task of todoList) {
    console.log(`Task conluded: ${task}`);
}

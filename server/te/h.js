// Abstract Observer class
class Observer {
    // Abstract method to handle new messages
    handleNewMessage(message) {}
}

// Concrete Observer class for users
class UserObserver extends Observer {
    // Constructor
    constructor(username) {
        super();
        this.username = username;
    }

    // Handle new message
    handleNewMessage(message) {
        console.log(`${this.username} received message: ${message}`);
    }
}

// Subject class
class ChatSubject {
    // List of observers
    observers = [];

    // Add observer
    addObserver(observer) {
        this.observers.push(observer);
    }

    // Remove observer
    removeObserver(observer) {
        this.observers = this.observers.filter(o => o !== observer);
    }

    // Notify observers
    notifyObservers(message) {
        this.observers.forEach(o => o.handleNewMessage(message));
    }
}

// Create a chat subject
const chatSubject = new ChatSubject();

// Create a user observer
const userObserver = new UserObserver('Mario');

// Add the user observer to the chat subject
chatSubject.addObserver(userObserver);

// Send a message
chatSubject.notifyObservers('Note!!!');

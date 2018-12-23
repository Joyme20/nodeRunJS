export default class LinkList{
    Node(element) {
        this.element = element;
        this.next = null;
    }

    LList() {
        this.head = new Node("head");
        this.find = find;
        this.insert = insert;
        this.display = display;
        this.findPrevious = findPrevious;
        this.remove = remove;
    }

    remove(item) {
        var prevNode = this.findPrevious(item);
        if (!(prevNode.next == null)) {
            prevNode.next = prevNode.next.next;
        }
    }

    findPrevious(item) {
        var currNode = this.head;
        while (!(currNode.next == null) &&
        (currNode.next.element != item)) {
            currNode = currNode.next;
        }
        return currNode;
    }

    display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }

    find(item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    insert(newElement, item) {
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

}

var cities = new LinkList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
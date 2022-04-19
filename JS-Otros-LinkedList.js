class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class List{
    constructor(){
        this.length = 0;
        this.head = null;
    }
    add(data){
        let node = new Node(data);
        let current = this.head;
        if (!current) {
            this.head = node;
            this.length++;
            return node;
        }
        while (current.next){
            current = current.next;
        }
        current.next = node;
        this.length++;
        return node;
    }
    remove(){
        let current = this.head;
        if (!current) return null;
        if (!current.next) {
            this.length--;
            return this.head = null;
        }
        while (current.next.next){
            current = current.next;
        }
        this.length--;
        return current.next = null;
    }
    search(data){
        let current = this.head;
        if (!current) return null;
        while (current){
            if (current.data === data) return current;
            current = current.next;
        }
        return null
    } 
}

let lista = new List();
lista.add("Facu");
lista.add("Sofi")
lista.add("Mabel");
lista.add("Javier");
console.log(lista);
console.log(lista.search("Mabel"));
lista.remove();
lista.remove();
lista.remove();
lista.remove();
console.log(lista);
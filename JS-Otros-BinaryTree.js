'use strict'

function BinarySearchTree(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.length = 1;
}

BinarySearchTree.prototype.insert = function(value){
    let node = new BinarySearchTree(value);
    this.length++;

    if (value > this.value){
        if (!this.right) { //Si right es null, añado el node
            this.right = node;
        }else{
            return this.right.insert(value); //Si no, me paro en el nodo de la derecha y llamo a insert
        }
    }
    
    if (value < this.value){
        if (!this.left){ //Si left es null, añado el node
            this.left = node;
        }else{
            return this.left.insert(value); //Si no, me paro en el nodo de la izquierda y llamo a insert
        }
    }
}

BinarySearchTree.prototype.contains = function(value){

    if (value === this.value){
        return true;
    }

    if (value > this.value){ // 12 > 13 ---> right
        if (!this.right) return false;
        return this.right.contains(value);
    }
    if (value < this.value){ // 12 < 13 ---> left
        if (!this.left) return false;
        return this.left.contains(value)
    }
}

BinarySearchTree.prototype.size = function(){
    return this.length;
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order = "in-order"){
    if(order === "in-order"){   //IZQUIERDA - ROOT - DERECHA
        if(this.left) this.left.depthFirstForEach(cb, order);
        cb(this.value);
        if(this.right) this.right.depthFirstForEach(cb, order);
    }
    if(order === "pre-order"){  //ROOT - IZQUIERDA - DERECHA
      cb(this.value);
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
    }
    if(order === "post-order"){ //IZQUIERDA - DERECHA - ROOT
      if(this.left) this.left.depthFirstForEach(cb, order);
      if(this.right) this.right.depthFirstForEach(cb, order);
      cb(this.value);
    }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, array){ //Por niveles
    if (!array) array = [];

    cb(this.value);
    if (this.left) array.push(this.left);
    if (this.right) array.push(this.right);

    if (array.length > 0) {
        array.shift().breadthFirstForEach(cb, array);
    }
}

/*
                         (20)
                        /    \
                    (15)     (25)
                    /  \     /   \
                  (5) (17) (21) (28) 
Hago la primera vuelta sobre el 20, aplico cb al nodo 20 y mi array será [15, 25]
Antes de terminar pregunto si array tiene length, entonces hace un shift, saca el
primer valor y vuelve a empezar la función con el primer valor del array (15).
                         (20)
                        /    \
  vamos por este--->(15)     (25)
                    /  \     /   \
                  (5) (17) (21) (28) 
--------------------->array === [25]<---------------------
Hago la 2da vuelta sobre el nodo 15, aplico cb al 15 y mi array será [25, 5, 17]
Antes de terminar pregunto si array tiene length, entonces hace un shift, saca el
primer valor y vuelve a empezar la función con el primer valor del array (25). 
                         (20)
                        /    \
                    (15)     (25)<---vamos por este
                    /  \     /   \
                  (5) (17) (21) (28) 
--------------------->array === [5, 17]<---------------------
Hago la 3ra vuelta sobre el nodo 25, aplico cb al 25 y mi array será [5, 17, 21, 28]
Antes de terminar pregunto si array tiene length, entonces hace un shift, saca el
primer valor y vuelve a empezar la función con el primer valor del array. 
*/


let arbol = new BinarySearchTree(20);

arbol.insert(15);
arbol.insert(25);
arbol.insert(5);
arbol.insert(17);
arbol.insert(21);
arbol.insert(28);
arbol.insert(0);
arbol.insert(14);
arbol.insert(50);
arbol.insert(1);
arbol.insert(45);
arbol.insert(13);
arbol.insert(12);
arbol.insert(11);
arbol.insert(30);
arbol.insert(35);
arbol.insert(33);
arbol.insert(31);
arbol.insert(34);

console.log(arbol.contains(0));
console.log(arbol.size())
console.log(arbol);
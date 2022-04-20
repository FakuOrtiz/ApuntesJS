function HashTable() {
    this.numBuckets = 35;
    this.buckets = []; //Acá guardo los valores con set
}

HashTable.prototype.hash = function(key){
    let cont = 0;
    for (let i = 0; i < key.length; i++) {
        cont += key.charCodeAt(i); //Guardo la suma de todos los key code de las letras
    }
    return cont % this.numBuckets; //Retorno el mod de esa suma por el número de buckets
}

HashTable.prototype.set = function(key, value){
    if (typeof key !== "string") throw new TypeError("Keys must be strings");
    let index = this.hash(key); //Index tiene la posición de un bucket donde guardaré el valor
    if (!this.buckets[index]){ //Si esa posición está vacía, creo un objeto
        this.buckets[index] = {}; //El objeto se crea para evitar la colisión: [{foo: "bar1", ofo: "bar2"}]
    }
    this.buckets[index][key] = value; //Guardo el valor en el index
    //    [ obj ][ 9 ]["foo"]["bar1"]
}

HashTable.prototype.get = function(key){
    let index = this.hash(key);
    return this.buckets[index][key]; //devuelve
}

HashTable.prototype.hasKey = function(key){
    let index = this.hash(key);
    return this.buckets[index].hasOwnProperty(key); //true o false si tiene o no la key
}

let table = new HashTable();
table.set("foo", "bar1");
table.set("ofo", "bar2");
console.log(table.get("ofo"));
console.log(table.hasKey("ofo"))
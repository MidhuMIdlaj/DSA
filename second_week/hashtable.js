class hashTable{
    constructor(size = 10){
        this.table = new Array(size)
    }
    
    _hash(key){
        let hash = 0;
        for(let i=0; i<key.length; i++){
           hash = (hash + key.charCodeAt(i) * i)% this.table.length
        }
        return hash
    }
    
   set(key , value){
       let index = this._hash(key)
       
       if(!this.table[index]){
           this.table[index] =[]
       }
       for(let i=0; i< this.table[index].length; i++){
           if(this.table[index][i][0] == key){
               this.table[index][i][1] =value;
               return 
           }
       }
       return this.table[index].push([key, value])
   }
   
   get(key){
       let index = this._hash(key)
       let bucket = this.table[index]
       
       if(bucket){
           for(let i=0; i<bucket.length; i++){
               if(bucket[i][0] == key){
                   return bucket[i][1]
               }
           }
       }
       return undefined;
   }
}

let hashed = new hashTable();
hashed.set("name", "midhulaj")
hashed.set("age", "20")
hashed.set("place", "aikarappadi")
console.log(hashed.get("name"))




export default class Dictionary {
    constructor(){
        this.items = {};
    }

    has(key){
        return this.items.hasOwnProperty(key);
    }

    set(key,value){
        this.items[key] = value;
    }

    delete(key){
        if(this.has(key)){
            delete this.items[key];
            return true;
        }
        return false;
    }

    get(key){
        return this.has(key) ? this.items[key] : undefined;
    }

    values(){
        let values = [];
        for(let k in this.items){
            if(this.has(key)){
                values.push(this.items[key]);
            }
        }
    }

    keys(){
        return Object.keys(this.items);
    }

    getItems(){
        return this.items;
    }
}
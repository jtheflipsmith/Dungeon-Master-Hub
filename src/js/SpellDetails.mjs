

export default class SpellDetails {
    constructor(index, dataSource) {
        this.index = index;
        this.item = {};
        this.dataSource = dataSource;
    }
    async init() {
        this.item = await this.dataSource.findItemByIndex(this.index);
        
    }
   
}
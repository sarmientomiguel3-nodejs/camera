class BaseRepository {
    constructor(model){
        this.model = model;
    }
    async findAll(){
        return await this.model.query();
    }
    async findById(id) {
        return await this.model.query()
            .findById(id);
    }
    async create(data) {
        return await this.model.query()
            .insert(data);;
    }
    async update(id, data){
        return await this.model.query()
            .findById(id)
            .patch(data);
    }
    async delete(id) {
        return await this.model.query()
            .deleteById(id);
    }
}

module.exports = BaseRepository;
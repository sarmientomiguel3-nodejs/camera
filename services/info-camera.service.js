const {faker}  = require('@faker-js/faker');
const boom = require('@hapi/boom');
const InfoCameraRepository = require('./../repositories/info-camera.repository');

class InfoCameraService {
    constructor(){
        this.notes = [];
        this.infoCameraRepository = new InfoCameraRepository();
    }

    async create(data) {
        const newInfoCamera =  {
            id: faker.string.uuid(),
            ...data
        }
        this.notes.push(newInfoCamera);
        return newInfoCamera;
    }

    async findAll(){
        const data = this.infoCameraRepository.findAll();
        return data;
    }

    async findOne(id) {
        const note = this.notes.find(item => item.id === id);
        if(!note) {
            throw boom.notFound('note not found');
        }
        if (note.isBlock){
            throw boom.conflict('note is block');
        }
        return note;
    }

    async update(id, changes){
        const index = this.notes.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('note not found');
        }
        const note = this.notes[index];
        this.notes[index] = {
            ...note,
            ...changes
        };
        return this.notes[index];
    }

    async delete(id) {
        const index = this.notes.findIndex(item => item.id === id);
        if(index === -1){
            throw boom.notFound('note not found');
        }
        this.notes.splice(index, 1);
        return {id};
    }
}

module.exports = InfoCameraService;
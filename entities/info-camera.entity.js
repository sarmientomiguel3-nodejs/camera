const {Model} = require('objection');
const knex = require('./../libs/knex');
const timestamps = require('objection-timestamps');
const softDelete = require('objection-soft-delete');

Model.knex(knex);

class InfoCamera extends softDelete({columnName: 'deleted_at'})(Model) {
    static get tableName(){
        return 'info_cameras';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['code', 'location'],
            properties: {
                code: {
                    type:'string',
                    pattern: '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$'
                },
                location: {type:'string'},
                initial_activity: {type:'timestamp'},
                last_activity: {type:'timestamp'},
                state: {
                    enum: ['ACTIVO', 'INACTIVO', 'ELIMINADO']
                },
                user_id: {
                    type:'string',
                    pattern: '^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$'
                },
            }
        };
    }
    $beforeInsert() {
        this.created_at = new Date().toISOString();
    }

    $beforeUpdate() {
        this.updated_at = new Date().toISOString();
    }
}

module.exports = InfoCamera;

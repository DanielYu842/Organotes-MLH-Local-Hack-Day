const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema and model
const userdataSchema = new Schema({
    email: String,
    dividerName: String,
    note: [{
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String,
    },{
        topic: String,
        definition: String,
    },{
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String,
    }, {
        topic: String,
        definition: String
    }]
});

const newNote = mongoose.model('newNote', userdataSchema);

module.exports = newNote;

demo = {
    email: "Aditya@gmail.com",
    dividerName: "Biology",
    note: [{
        topic: "Biology",
        definition: 'The study of living organisms.',
    }, {
        topic: 'DNA',
        definition: 'Genetic code of individual organism. Determines characteristics of unit.',
    },{
        topic: 'Ribosomes',
        definition: 'Protein within the cell.',
    },{
        topic: 'DUE DATE',
        definition: 'Jan, 2020',
    }, {
        topic: 'Respiration Issues:',
        definition: '1. Heart Attack 2. Congestion 3. Aneurysms',
    }]
};
console.log(JSON.stringify(demo));
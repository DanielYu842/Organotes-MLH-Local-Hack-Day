const mocha = require('mocha');
const userdata = require('./userdata')
describe('userdata test', function(){
    //create tests
    it('saves a record to the database', function(done){
        let upload = new newNote({
            email = 'test@example.com' 
        });

        upload.save().then(function(){
           assert(upload.isNew === false);  
           done();
        });

        

    });

});
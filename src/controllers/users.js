import mongoOp from '../models/mongo';

class UsersControllers {
    get(req, res) {
        let resp = {};
        
            mongoOp.find({}, (err, data) => {
                if (err) {
                    resp = {'error': true, 'message': 'Error'};
                } else {
                    resp = {'error': false, 'message': data}
                }
        
                res.json(resp);
            });
    };

    post(req, res) {
        let db = new mongoOp();
        let resp = {};
        let data = null;
    
        db.name = req.body.name;
    
        db.idade = req.body.idade;
    
        db.save((err) => {
            if (err) {
                resp = {'error': true, 'message': 'Error addind data'}
            } else {
                resp = {'error': false, 'message': 'Data added'}
            }
    
            res.json(resp); 
            
        });
    }
}
export default UsersControllers;
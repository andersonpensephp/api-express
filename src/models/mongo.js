import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27018/mydb');

const mongoSchema = mongoose.Schema;

const userSchema = {
    'name': String,
    'idade': Number
};

export default mongoose.model('users', userSchema);
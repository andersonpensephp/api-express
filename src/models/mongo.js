import mongoose from 'mongoose';

mongoose.connect('PATH_TO_MONGODB');

const mongoSchema = mongoose.Schema;

const userSchema = {
    'name': String,
    'idade': Number
};

export default mongoose.model('users', userSchema);
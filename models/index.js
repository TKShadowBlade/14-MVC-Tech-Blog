const User = require('./User');
const Posting = require('./Posting');
const Comments = require('./Comments');

Posting.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Posting.hasMany(Comments, {
    foreignKey: 'postId',
    onDelete: 'CASCADE'
});

Comments.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = { User, Posting, Comments };
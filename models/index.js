const User = require('./User');
const Comment = require('./Comment');

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.hasMany(Comment, {
  foreignKey: 'parent_id',
  as: "reply"
});

Comment.belongsTo(Comment, {
    foreignKey: 'parent_id',
    as: "replies"
});

module.exports = { User, Comment };

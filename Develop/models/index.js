const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define associations between models (if not already defined in individual models)

// Example: Product belongs to Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Example: Product has many ProductTags
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id',
});

// Example: Tag has many ProductTags
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});

module.exports = { Category, Product, Tag, ProductTag };

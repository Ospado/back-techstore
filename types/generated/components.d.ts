import type { Schema, Struct } from '@strapi/strapi';

export interface ProductOrderItem extends Struct.ComponentSchema {
  collectionName: 'components_product_order_items';
  info: {
    displayName: 'OrderItem';
  };
  attributes: {
    Price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    producto: Schema.Attribute.Relation<'oneToOne', 'api::producto.producto'>;
    quantity: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.order-item': ProductOrderItem;
    }
  }
}

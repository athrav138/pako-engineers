export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Detailed Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'gallery',
      title: 'Product Gallery',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'specifications',
      title: 'Technical Specifications',
      type: 'object',
      fields: [
        { name: 'material', title: 'Material', type: 'string' },
        { name: 'diameter', title: 'Diameter Range', type: 'string' },
        { name: 'length', title: 'Length', type: 'string' },
        { name: 'tolerance', title: 'Tolerance', type: 'string' },
        { name: 'surfaceFinish', title: 'Surface Finish', type: 'string' },
        { name: 'heatTreatment', title: 'Heat Treatment', type: 'string' },
      ],
    },
    {
      name: 'applications',
      title: 'Applications (Industries)',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'isFeatured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    },
  ],
};

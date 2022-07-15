export default {
  name: "category",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Category Name",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "image",
      name: "image",
      title: "Image of the category",
    },
  ],
};

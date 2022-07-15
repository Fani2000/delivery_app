export default {
  name: "dish",
  title: "Dish",
  type: "document",
  fields: [
    {
      type: "string",
      name: "name",
      title: "Name of dish",
      validation: (Rule) => Rule.required(),
    },
    {
      type: "string",
      name: "short_description",
      title: "Short Description",
      validation: (Rule) => Rule.max(200),
    },
    {
      type: "number",
      name: "price",
      title: "Price of the dish in GBP",
    },
    {
      type: "image",
      name: "image",
      title: "Image of the dish",
    },
  ],
};

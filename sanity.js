import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
  projectId: "y9iwtzg0",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-07-15",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;

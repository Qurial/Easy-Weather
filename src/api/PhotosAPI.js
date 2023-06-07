// import { photoAPIKey } from "./APIKeys";
// import { createClient } from 'pexels';

// const client = createClient(photoAPIKey);

// export const PhotosAPI = {
//   getPhoto: async (query) => {
//     let response = await client.photos.search({ query, per_page: 1, orientation: 'landscape', size: 'large' })
//     return { small: response.photos[0].src.small, large2x: response.photos[0].src.large2x }
//   }
// }
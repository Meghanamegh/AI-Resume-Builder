import ImageKit from "@imagekit/nodejs";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,       // ✅ add this line
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,     // already correct
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,   // ✅ add this line
});

export default imagekit;
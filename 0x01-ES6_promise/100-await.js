import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const Photoresponse = await uploadPhoto();
    const Userresponse = await createUser();

    return {
      photo: Photoresponse,
      user: Userresponse,
    };
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}

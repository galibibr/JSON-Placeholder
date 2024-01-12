export type TPost = {
   userId: number;
   id: number;
   title: string;
   body: string;
};

export type TComment = {
   postId: number;
   id: number;
   name: string;
   email: string;
   body: string;
};

export type TAlbum = {
   userId: number;
   id: number;
   title: string;
};

export type TPhoto = {
   albumId: number;
   id: number;
   title: string;
   url: string;
   thumbnailUrl: string;
};

export type TTodo = {
   userId: number;
   id: number;
   title: number;
   completed: boolean;
};

export type TUser = {
   id: number;
   name: string;
   username: string;
   email: string;
   address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
         lat: string;
         lng: string;
      };
   };
   phone: string;
   website: string;
   company: {
      name: string;
      catchPhrase: string;
      bs: string;
   };
};

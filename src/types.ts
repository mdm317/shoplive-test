export type Item = {
  id: number;
  title: string;
  createdAt: number;
  likeCount: number;
  imageUrl: string;
};

export type AddItemProp = {
  title: string;
  imageUrl: string;
  likeCount: string;
};

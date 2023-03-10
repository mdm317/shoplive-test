export type Item = {
  id: number;
  title: string;
  createdAt: number;
  likeCount: number;
  imageUrl: string;
  splitTitle?: string[];
};

export type AddItemProp = {
  title: string;
  imageUrl: string;
  likeCount: string;
};
export type EditItemProp = AddItemProp;

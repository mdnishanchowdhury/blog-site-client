export interface Blog {
  id: string;
  title: string;
  content: string;
  thumbnail: string | null;
  isFeatured: boolean;
  status: "PUBLISHED" | "DRAFT";
  tags: string[];
  views: number;
  authorId: string;
  createdAt: string;
  updatedAt: string;
}

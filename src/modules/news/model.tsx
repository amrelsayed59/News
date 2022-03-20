export interface NewsItem {
  id: number;
  title: string;
  url: string;
  status: boolean;
  type: string;
  createdTime: number | Date;
  field_subtype: null;
  field_category: number;
  categoryColour: string;
  categoryAlias: string;
  tags: string[];
  field_tags: number[];
  description: string;
  heroImage: string;
  thumbnailImage: string;
  category: string;
}

export interface FilterState {
  search: string;
  sort: string;
  categories: string[];
  tags: string[];
  date: Date | string;
  fromMonth: string;
  toMonth: string;
  fromYear: string;
  toYear: string;
}

export interface CategoryOptions {
  value: string;
  label: string;
}

export interface TagOptions {
  value: string;
  label: string;
}

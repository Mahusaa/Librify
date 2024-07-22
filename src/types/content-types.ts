type Content = {
  type: string;
  text: string;
  styles: object;
};

export type Paragraph = {
  id: string;
  type: string;
  props: {
    textColor: string;
    backgroundColor: string;
    textAlignment: string;
  };
  content: Content[];
  children: any[];
} | null;


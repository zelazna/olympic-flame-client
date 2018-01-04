export class FlamePath {
  id?: string;
  description?: string;
  name?: string;
  events?: Event[];
}

export class Event {
  id?: string;
  description?: string;
  title?: string;
  images_url?: string[];
  date?: Date;
}

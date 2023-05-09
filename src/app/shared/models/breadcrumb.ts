export interface Breadcrumb {
  title: string;
  link: string;
  paramKey?: string;
  paramValues?: Object;
  // generated commulative link (+ param where needed) - not to be passed
  href?: string;
}

import { I18nText } from "../i18n";
export interface SideProjectType {
  title: I18nText;
  shortDescription: I18nText;
  link?: string;
  images: Array<string>;
}

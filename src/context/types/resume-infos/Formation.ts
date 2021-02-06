import { I18nText } from "../i18n";
export interface FormationType {
  date: {
    from: I18nText;
    to?: I18nText;
  };
  title: I18nText;
  secondary: I18nText;
}

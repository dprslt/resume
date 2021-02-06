import { I18nText } from "../i18n";

export interface ExperienceActivity {
  title: I18nText;
  description: I18nText;
}

export interface ExperienceType {
  title: I18nText;
  company: I18nText;
  place: I18nText;
  description?: I18nText;
  date: {
    from: I18nText;
    to?: I18nText;
  };
  activities?: Array<ExperienceActivity>;
  displayLevel: "full" | "compact" | "none";
  tech: Array<string>;
}

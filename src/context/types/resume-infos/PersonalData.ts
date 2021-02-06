import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { I18nText } from "../i18n";

export interface TargetableInfo {
  target: string;
  text: string;
}

export interface PersonalDataType {
  name: string;
  surname: string;
  title: I18nText;

  phone: TargetableInfo;
  mail: TargetableInfo;
  age: I18nText;
  license: I18nText;

  personalFooterIcon: IconProp;
  personalFooterNote: I18nText;

  linkedIn?: string;
  github?: string;
  socialTag?: string;
}

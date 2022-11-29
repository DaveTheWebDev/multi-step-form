interface IPreference {
  preference: string;
  subpreference?: IPreference[];
}

export interface ChoosenPreferencesProps {
  preferences: IPreference[]
}

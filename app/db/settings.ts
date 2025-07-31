export interface Setting {
  id: string;
  key: string;
  value: string | number | boolean | Record<string, any>;
  updatedAt: number;
}

export const settings: Setting[] = [
  {
    id: 'setting_temp_default',
    key: 'default_temperature',
    value: 0.7,
    updatedAt: Date.now(),
  },
  {
    id: 'setting_theme',
    key: 'ui_theme',
    value: 'dark',
    updatedAt: Date.now(),
  },
  {
    id: 'setting_voice_default',
    key: 'default_voice',
    value: 'voice_thor',
    updatedAt: Date.now(),
  },
  {
    id: 'setting_multiverse_mode',
    key: 'multiverse_mode',
    value: true,
    updatedAt: Date.now(),
  },
];

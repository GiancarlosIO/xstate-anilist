import { getRangeOfYears } from '../../utils';

export type FilterValues = { value: string | number; label: string }[];

export type Filter = {
  label: string;
  inputType: 'range' | 'select';
  key: string;
  min?: number;
  max?: number;
  multiSelect?: boolean;
  values?: FilterValues;
};

export const filters: Filter[] = [
  {
    label: 'Year',
    inputType: 'select',
    key: 'year',
    multiSelect: false,
    values: getRangeOfYears(),
  },
  {
    label: 'Season',
    key: 'season',
    inputType: 'select',
    multiSelect: false,
    values: [
      {
        label: 'Winter',
        value: 'WINTER',
      },
      {
        label: 'Spring',
        value: 'SPRING',
      },
      {
        label: 'Summer',
        value: 'SUMMER',
      },
      {
        label: 'Fall',
        value: 'FALL',
      },
    ],
  },
  {
    label: 'Format',
    key: 'format',
    inputType: 'select',
    multiSelect: true,
    values: [
      {
        label: 'TV Show',
        value: 'TV',
      },
      {
        label: 'Movie',
        value: 'MOVIE',
      },
      {
        label: 'TV Short',
        value: 'TV_SHORT',
      },
      {
        label: 'Special',
        value: 'SPECIAL',
      },
      {
        label: 'OVA',
        value: 'OVA',
      },
      {
        label: 'ONA',
        value: 'ONA',
      },
      {
        label: 'Music',
        value: 'MUSIC',
      },
    ],
  },
];

export const hiddenFilters: { [key: string]: Filter } = {
  'Source Material': {
    inputType: 'select',
    key: 'SOURCE_MATERIAL',
    values: {
      ORIGINAL: 'Original',
      MANGA: 'Manga',
      LIGHT_NOVEL: 'Light Novel',
      NOVEL: 'Novel',
      ANIME: 'Anime',
      VISUAL_NOVEL: 'Visual Novel',
      VIDEO_GAME: 'Video Game',
      DOUJINSHI: 'Doujinshi',
      OTHER: 'Other',
    },
  },
  'country of origin': {
    inputType: 'select',
    key: 'COUNTRY_OF_ORIGIN',
    values: {
      JP: 'Japan',
      KR: 'South Korea',
      CN: 'China',
      TW: 'Taiwan',
    },
  },
  'year range': {
    inputType: 'range',
    key: 'yearRange',
    min: 1970,
  },
  'airing status': {
    inputType: 'select',
    key: 'AIRING_STATUS',
    values: {
      RELEASING: 'Airing',
      FINISHED: 'Finished',
      NOT_YET_RELEASED: 'Not Yet Aired',
      CANCELLED: 'Cancelled',
    },
  },
  'streaming on': {
    key: 'STREAMING_ON',
    inputType: 'select',
    multiSelect: true,
    values: {
      crunchyroll: 'Crunchyroll',
      funimation: 'Funimation',
      hidive: 'Hidive',
      vrv: 'VRV',
      netflix: 'Netflix',
      amazon: 'Amazon',
      hulu: 'Hulu',
      hbomax: 'HBO Max',
      animelab: 'AnimeLab',
      viz: 'Viz',
      retrocrush: 'RetroCrush',
      'midnightpulp.com': 'Midnight Pulp',
      'tubitv.com': 'Tubi TV',
      'contv.com': 'CONtv',
    },
  },
  episodes: {
    key: 'EPISODES',
    inputType: 'range',
    min: 0,
    max: 150,
  },
  duration: {
    inputType: 'range',
    key: 'DURATION',
    min: 0,
    max: 170,
  },
};

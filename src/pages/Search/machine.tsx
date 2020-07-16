import { Machine, assign } from 'xstate';

type FilterValue = {
  label: string;
  value: string;
};

export type Context = {
  genres?: FilterValue;
  year?: FilterValue;
  season?: FilterValue;
  format: Array<FilterValue>;
};

interface Schema {
  states: {
    initial: {};
    filtered: {};
  };
}

export enum EVENT_TYPE {
  SET_GENRE = 'SET_GENRE',
  SET_YEAR = 'SET_YEAR',
  SET_SEASON = 'SET_SEASON',
  SET_FORMAT = 'SET_FORMAT',
  CLEAR_FORMAT = 'CLEAR_FORMAT',
}

export type Events =
  | { type: EVENT_TYPE.SET_GENRE; value?: FilterValue }
  | {
      type: EVENT_TYPE.SET_YEAR;
      value?: FilterValue;
    }
  | { type: EVENT_TYPE.SET_SEASON; value?: FilterValue }
  | {
      type: EVENT_TYPE.SET_FORMAT;
      value: FilterValue[];
    }
  | {
      type: EVENT_TYPE.CLEAR_FORMAT;
      value: FilterValue[];
    };

const machine = Machine<Context, Schema, Events>(
  {
    id: 'animeList',
    initial: 'initial',
    context: {
      genres: undefined,
      year: undefined,
      season: undefined,
      format: [],
    },
    states: {
      initial: {
        always: [{ target: 'filtered', cond: 'hasFilterSelected' }],
      },
      filtered: {
        always: [
          {
            target: 'initial',
            cond: 'hasNoFilterSelected',
          },
        ],
      },
    },
    on: {
      SET_GENRE: {
        actions: ['setGenre'],
      },
      SET_YEAR: {
        actions: ['setYear'],
      },
      SET_SEASON: {
        actions: ['setSeason'],
      },
      SET_FORMAT: {
        actions: ['setFormat'],
      },
      CLEAR_FORMAT: {
        actions: ['clearFormat'],
      },
    },
  },
  {
    guards: {
      hasFilterSelected: context =>
        !!(
          context.format.length ||
          context.genres ||
          context.season ||
          context.year
        ),
      hasNoFilterSelected: context =>
        !(
          context.format.length ||
          context.genres ||
          context.season ||
          context.year
        ),
    },
    actions: {
      setGenre: assign({
        genres: (context, event) => event.value as FilterValue,
      }),
      setYear: assign({
        year: (context, event) => event.value as FilterValue,
      }),
      setSeason: assign({
        season: (context, event) => event.value as FilterValue,
      }),
      setFormat: assign({
        format: (context, event) => event.value as FilterValue[],
      }),
      clearFormat: assign({
        format: [],
      }),
      // clearFormat: assign({
      //   format: (context, event) =>
      //     context.format.filter(f => f !== event.value),
      // }),
    },
  },
);

export default machine;

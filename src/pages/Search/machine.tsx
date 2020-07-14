import { Machine, assign } from 'xstate';

export type Context = {
  genres?: string;
  year?: string;
  season?: string;
  format?: string;
};

interface Schema {
  states: {
    initial: {};
    filtered: {};
  };
}

export type Events =
  | { type: 'SET_GENRE'; value?: string }
  | {
      type: 'SET_YEAR';
      value?: string;
    }
  | { type: 'SET_SEASON'; value?: string }
  | {
      type: 'SET_FORMAT';
      value?: string;
    };

const machine = Machine<Context, Schema, Events>(
  {
    id: 'animeList',
    initial: 'initial',
    context: {
      genres: undefined,
      year: undefined,
      season: undefined,
      format: undefined,
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
    },
  },
  {
    guards: {
      hasFilterSelected: (context, event) =>
        !!(context.format || context.genres || context.season || context.year),
      hasNoFilterSelected: (context, event) =>
        !(context.format || context.genres || context.season || context.year),
    },
    actions: {
      setGenre: assign({
        genres: (context, event) => event.value,
      }),
      setYear: assign({
        year: (context, event) => event.value,
      }),
      setSeason: assign({
        season: (context, event) => event.value,
      }),
      setFormat: assign({
        format: (context, event) => event.value,
      }),
    },
  },
);

export default machine;

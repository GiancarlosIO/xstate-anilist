import { Machine, assign } from 'xstate';

enum FILTER_QUERY_STRINGS_KEY {
  GENRE = 'genre',
  YEAR = 'year',
  SEASON = 'season',
  FORMAT = 'format',
}

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
        actions: ['setGenre', 'updateUrlSearchParams'],
      },
      SET_YEAR: {
        actions: ['setYear', 'updateUrlSearchParams'],
      },
      SET_SEASON: {
        actions: ['setSeason', 'updateUrlSearchParams'],
      },
      SET_FORMAT: {
        actions: ['setFormat', 'updateUrlSearchParams'],
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
        format: (context, event) => (event.value as FilterValue[]) || [],
      }),
      updateUrlSearchParams: (context, event) => {
        console.log({ context, event });
        const searchParams = new URLSearchParams(window.location.search);

        if (context.season) {
          searchParams.set(
            FILTER_QUERY_STRINGS_KEY.SEASON,
            context.season.value,
          );
        } else {
          searchParams.delete(FILTER_QUERY_STRINGS_KEY.YEAR);
        }

        if (context.year) {
          searchParams.set(FILTER_QUERY_STRINGS_KEY.YEAR, context.year.value);
        } else {
          searchParams.delete(FILTER_QUERY_STRINGS_KEY.YEAR);
        }

        if (context.format.length > 0) {
          const queryValue = context.format
            .map(format => format.value)
            .join('+');

          searchParams.set(FILTER_QUERY_STRINGS_KEY.FORMAT, queryValue);
        } else {
          searchParams.delete(FILTER_QUERY_STRINGS_KEY.FORMAT);
        }

        console.log({ searchparams: searchParams.toString() });

        window.history.replaceState(
          {},
          '',
          `${window.location.pathname}?${searchParams.toString()}`,
        );
      },
    },
  },
);

export default machine;

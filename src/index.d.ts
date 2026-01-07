export type BikramSambat = {
  year: number;
  month: number;
  day: number;
};

export type CommonEra = {
  year: number;
  month: number;
  day: number;
};

export declare function toBikramSambat({ year, month, day }: CommonEra): BikramSambat;
export declare function toCommonEra({ year, month, day }: BikramSambat): CommonEra;

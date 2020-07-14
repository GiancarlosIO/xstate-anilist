/* eslint-disable no-multi-assign */
export function getRangeOfYears(startYear = 2000) {
  const currenYear = new Date().getFullYear();
  const years: { value: number; label: string }[] = [];

  while (startYear <= currenYear) {
    // eslint-disable-next-line no-param-reassign
    const year = (startYear += 1);

    years.push({
      label: year.toString(),
      value: year,
    });
  }

  return years;
}

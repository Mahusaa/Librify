const dateFormatting = (date: Date, formatString: string): string => {
  const options: Intl.DateTimeFormatOptions = {};

  switch (formatString) {
    case "E, h:m b":
      options.weekday = "short";
      options.hour = "numeric";
      options.minute = "numeric";
      break;
    case "PPpp":
      options.year = "numeric";
      options.month = "short";
      options.day = "numeric";
      options.hour = "numeric";
      options.minute = "numeric";
      break;
    default:
      break;
  }

  return new Intl.DateTimeFormat('en-US', options).format(date);
};

export default dateFormatting;

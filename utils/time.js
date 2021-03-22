const { format, parse } = require('date-fns');

export const parseTime = (time) => parse(time, 'yyyy-MMM-dd', 0);
export const formatTime = (time) => format(parseTime(time), 'dd MMM, yyyy');

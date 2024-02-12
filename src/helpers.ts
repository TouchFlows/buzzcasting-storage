import { IQuery } from "./interfaces/IQuery";
import { IStorageManager } from "./interfaces/IStorageManager";

export const getKey = (query: IQuery): string => {
  let key = `${query.type}.${query.topics}`;
  if (query.hasOwnProperty("order")) {
    key += `.${query.order}`;
  }
  if (query.hasOwnProperty("period")) {
    key += `.${query.period}`;
  }
  return key;
};

export function moderation(options: IStorageManager, query: IQuery): IQuery {
  switch (options.moderation) {
    case "before":
      const date = new Date();
      const Hms = options.beforeTime?.split(":"); // default = '00:00:00'
      const H = parseInt(Hms ? Hms[0] : '00'),
        m = parseInt(Hms ? Hms[1] : "00"),
        s = parseInt(Hms ? Hms[2] : "00");
      query.before = date.setHours(H, m, s, 0) / 1000;
      if (!query.hasOwnProperty("period")) {
        query.period = date.getDay() === 1 ? 72 : 24; // take the weekend or just yesterday
      }
      break;
    case "delayed":
      if (options.delay && options.delay > 0) {
        query.delay = `${options.delay}`;
      }
      break;
    case "approved":
      query.approved = "1";
      break;
    default:
      if (options.period !== 0) {
        query.period = options.period;
      }
  }
  return query;
}

const awaitTimeout = (delay: number, reason: string) =>
  new Promise((resolve, reject) =>
    setTimeout(
      () => (reason === undefined ? resolve("ok") : reject(reason)),
      delay
    )
  );

export const wrapPromise = (promise: any, delay: number, reason: string) =>
  Promise.race([promise, awaitTimeout(delay, reason)]);

export const getParameterByName = (key: string) => {
  const match = RegExp("[?&]" + key + "=([^&]*)").exec(window.location.search);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};

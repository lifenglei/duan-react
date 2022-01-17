import load from "load-script";

export const loadScript = (url, option = {}) =>
  new Promise((resolve, reject) => {
    load(
      url,
      {
        async: true,
        ...option,
      },
      (err, script) => {
        if (err) {
          reject(err);
        }
        resolve(script);
      }
    );
  });

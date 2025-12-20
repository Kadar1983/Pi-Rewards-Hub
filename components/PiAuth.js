export const PiAuth = () => {
  return new Promise((resolve, reject) => {
    if (!window.Pi) return reject("Pi SDK not loaded. Open in Pi Browser.");

    window.Pi.authenticate(
      ["username"],
      (auth) => resolve(auth.user),
      (err) => reject(err)
    );
  });
};

export const PiAuth = async () => {
  if (!window.Pi) throw new Error("Pi SDK not loaded. Open in Pi Browser.");
  return new Promise((resolve, reject) => {
    window.Pi.authenticate(
      ["username"],
      (user) => resolve(user),
      (err) => reject(err)
    );
  });
};

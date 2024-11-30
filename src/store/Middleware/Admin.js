export const ignorEmptyAdmin = (store) => (next) => (action) => {
  let { admin } = store.getState();

  if (action.type === "admin/loginAdmin") {
    if (!action.payload[0].trim() || !action.payload[1].trim()) return;
    if (action.payload[0] !== admin.adminUser.login || action.payload[1] !== admin.adminUser.password) return;
    localStorage.setItem("admin", "true");
    action.payload[2]("/")
  }

  next(action);
};

export const emptyAdmin = (store) => (next) => (action) => {
  if (action.type === "admin/getAdmin") {
    if (action.payload !== "true") {
      next({ type: "admin/getAdmin", payload: false });
    } else {
      next({ type: "admin/getAdmin", payload: true });
    }
  } else {
    next(action);
  }
};

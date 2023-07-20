export const priorityName = (priority) => {
  const priorityMap = {
    0: "Baja",
    1: "Media",
    2: "Alta",
  };
  return priorityMap[priority];
};

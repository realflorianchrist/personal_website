export const formatDate = (date?: Date | null) => {
  if (!date) return;

  const weekday = date.toLocaleDateString("de-CH", { weekday: "short" });
  const datePart = date.toLocaleDateString("de-CH", {
    day: "numeric",
    month: "short"
  });
  const time = date.toLocaleTimeString("de-CH", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return { weekday, datePart, time };
};
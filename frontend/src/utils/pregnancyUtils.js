export const calculatePregnancyWeek = (dueDateStr) => {
  const dueDate = new Date(dueDateStr);
  const conceptionDate = new Date(
    dueDate.getTime() - 280 * 24 * 60 * 60 * 1000
  ); // subtract 40 weeks
  const now = new Date();
  const diffInDays = Math.floor((now - conceptionDate) / (1000 * 60 * 60 * 24));
  return Math.floor(diffInDays / 7);
};

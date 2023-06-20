// const formatDate = (date: string) => {
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   const newDate = new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
//   return newDate;
// };

const formatDate = (date: string) => {
  const options : Intl.DateTimeFormatOptions  = { year: 'numeric', month: 'long', day: 'numeric' };
  const newDate = new Intl.DateTimeFormat("en-GB", options).format(new Date(date));
  return newDate;
};
export default formatDate;
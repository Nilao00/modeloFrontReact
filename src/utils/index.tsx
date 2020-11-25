import moment from "moment";

const formatDate = (date: string | Date, format = "DD/MM/YYYY") => {
   return moment(date).format(format);
};

export default formatDate;

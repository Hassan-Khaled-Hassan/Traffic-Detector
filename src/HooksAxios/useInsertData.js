import BaseURL from "../api/BaseUrl";
//"api/v1/categories"
export const useInsertData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await BaseURL.post(url, params, config);
    
  return res;
};
//علشان اعرض ال response كله

export const useInsertDataWithImg = async (url, params) => {
  const config={
    headers : {"Content-Type" : "multipart/form-data",
  Authorization: `Bearer ${localStorage.getItem("token")}`}}
  const res = await BaseURL.post(url, params, config);
  console.log(res.status);

  return res;
};


import BaseURL from "../api/BaseUrl";
export const useUpdateDataWithImg = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await BaseURL.put(url, params, config);
  console.log(res.status);

  return res;
};

export const useUpdateData = async (url, params) => {
   const config = {
     headers: {
       Authorization: `Bearer ${localStorage.getItem("token")}`,
     },
   };
  const res = await BaseURL.put(url, params, config);

  return res;
};

export const useUpdatePatchData = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await BaseURL.patch(url, params, config);

  return res;
};

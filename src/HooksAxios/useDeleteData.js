import BaseURL from "../api/BaseUrl";

export const useDeleteData = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  console.log(config);
  const res = await BaseURL.delete(url, config);
  console.log(res);
  return res;
};

export default useDeleteData;

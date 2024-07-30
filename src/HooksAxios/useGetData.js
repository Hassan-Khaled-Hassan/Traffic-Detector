import BaseURL from "../api/BaseUrl";
//"api/v1/categories"
export const useGetData = async (url,params)=>{
     const res = await BaseURL.get(url,params);

     return res
}

export const useGetDataToken = async (url,params)=>{
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const res = await BaseURL.get(url, config);
      return res;
};



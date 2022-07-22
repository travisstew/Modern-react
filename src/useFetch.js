import { useState, useEffect } from "react";


const useFetch =(url)=>{


  const [data, setData] = useState(null);
  const [isLoading, setLoding ] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
        fetch(url).then(res=>{
            if(!res.ok){
              throw Error('could not fetch data for that')
            }

            return res.json();
          }).then((data)=>{
            console.log(data);
            setData(data)
            setLoding(false);
          }).catch((e)=>{
            console.log(e.message);
          })

    },1000)


},[url])

return {data, isLoading}

}

export default useFetch;
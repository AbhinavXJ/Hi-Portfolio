import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation";



const fetchDataAction = async (url) => {
  const token = process.env.NEXT_PUBLIC_GITHUB_PAT;
 

    try{

        const result = await fetch(url, {
          headers: {
              'Authorization': `token ${token}`
          }
      });
        const data = await result.json()
        const data_send = JSON.parse(JSON.stringify(data))
        // revalidatePath('/')
        return data_send
    
   


    }catch(e){
        console.log(e)

    }





  return (
    <div>fetchDataAction</div>
  )
}

export default fetchDataAction
import { revalidatePath } from "next/cache"



const fetchDataAction = async (url) => {
  const token = process.env.NEXT_PUBLIC_GITHUB_PAT;
  console.log("HELLO") // Replace this with your actual token
  console.log("Environment Variables:", process.env);

  console.log(token) // Replace this with your actual token

    try{

        console.log(url)
        const result = await fetch(url, {
          headers: {
              'Authorization': `token ${token}`
          }
      });
        const data = await result.json()
        // revalidatePath('/')
        return JSON.parse(JSON.stringify(data))
    
   


    }catch(e){
        console.log(e)

    }





  return (
    <div>fetchDataAction</div>
  )
}

export default fetchDataAction
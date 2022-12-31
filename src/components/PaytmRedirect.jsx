import React, { useEffect } from 'react'

function PaytmRedirect({resultData,paytmFinalUrl}) {    
    console.log(resultData,paytmFinalUrl)
    useEffect(()=>{
        if(document.f1){
        document.f1.submit()}
    },[])
    if(!resultData || !paytmFinalUrl){
        return <></>
    }
  return (
    <div>
        <center><h1>Please do not refresh this page...</h1></center>
        <form method="post" action={paytmFinalUrl} name="f1" >
            <table border="1">
                <tbody>
                {Object.keys(resultData).map(name=>(
                    <input type="hidden"  name={name} value={resultData[name]} ></input>
                ))}
                </tbody>
            </table>
        </form>
            </div>
  )
}

export default PaytmRedirect
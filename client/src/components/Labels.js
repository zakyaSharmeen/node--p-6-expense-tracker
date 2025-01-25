import React from 'react'
import {default as api} from "../store/apiSlice"

// const obj = [
//     {
//         type: "Saving",
//         color: "#f9c74f",
//         percentage: 45
//     },
//     {
//         type: "Investement",
//         color: "#f9c74f",
//         percentage: 20
//     },
//     {
//         type: "Expense",
//         color: "#f9c74f",
//         percentage: 10
//     },

// ]
export  default function Labels(){
    // api.useGetCategoriesQuery()
    // console.log(api.useGetCategoriesQuery());
    const {data,isFetching,isError,isSuccess} = api.useGetLabelsQuery()
    console.log({ mssg:"label",data,isFetching,isError,isSuccess});


    let Transactions;

    if(isFetching){
        Transactions = <div>FETCHING</div>
    }else if(isSuccess){
        Transactions = data.map((value, i) => 
            <LabelComponent key={i} data={value}></LabelComponent>
         )
    }else if (isError){
        Transactions = <div>Error</div>
    }


   
    
    return(
        <>
        {/* {LabelComponent()} */}
        {/* {data.map((value, i) => 
        <LabelComponent key={i} data={value}></LabelComponent>
        )} */}
        {Transactions}
          
        </>
    )

}    
 

function LabelComponent({data}){
    if(!data) return <></>
    return (
        

        <div className="labels flex justify-between">
            <div className="flex gap-2">
                <div className='w-2 h-2 rounded py-3' style={{background: data.color?? '#f9c74f'}}></div>
                <h3 className='text-md'>{data.type ?? ""} </h3>
            </div>
            <h3 className='font-bold'>{data.percentage ?? 0}%</h3>
        </div>
    )
}


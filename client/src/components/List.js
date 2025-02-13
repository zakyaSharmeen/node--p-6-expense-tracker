import React from 'react'
import {default as api} from "../store/apiSlice"



 export default function List() {
     // const obj = [
    //     {
    //         name: " RAM Saving",
    //         color: "#f9c74f",
          
    //     },
    //     {
    //         name: " SAIInvestement",
    //         color: "#f9c74f",
          
    //     },
    //     {
    //         name: " KARAN Expense",
    //         color: "#f9c74f",
           
    //     },
    
    // ]
     const {data,isFetching,isError,isSuccess} = api.useGetLabelsQuery()
        // console.log({ mssg: "comming from lists",data,isFetching,isError,isSuccess});

        const [deleteTransaction] = api.useDeleteTransactionMutation()
        let Transactions;


        const handleClick = (e) =>{
            // console.log({mssg:"clickde bttn"})
            // console.log(e.target)
            // console.log(e.target.dataset.id);
            if(!e.target.dataset.id) return 0;
            deleteTransaction({_id:e.target.dataset.id})
            

        }
    
        if(isFetching){
            Transactions = <div>FETCHING</div>
        }else if(isSuccess){
            Transactions = data.map((value, i) => 
                <Transition key={i} category={value} handler = {handleClick}></Transition>
             )
        }else if (isError){
            Transactions = <div>Error</div>
        }
   
  return (
    <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-xl'>History</h1>
        {Transactions}
        
    </div>
  )
}

function Transition({category, handler}){
    if(!category) return null;
    return(
        <div className="item flex justify-center bg-gray-50 py-2 rounded-r" style={{ borderRight : `8px solid ${category.color ??  "#e5e5e5"}`}}>
            <button className='px-3' onClick={handler}><box-icon data-id={category._id ?? ""} name="trash" color={category.color ?? "#e5e5e5"}></box-icon></button>            
            <span className='block w-full'>{category.name ?? ""}</span>
        </div>
    )
}



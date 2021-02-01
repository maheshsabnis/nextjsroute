import React, { useState, useEffect } from 'react';
import { HttpService } from './api/httpservice';
import Link from 'next/link';
import {useRouter} from 'next/router';
const ProductListComponent=(props)=> {
    const [products, updateProducts] = useState([]);
    const service = new HttpService();
    useEffect(()=>{
        service.getData()
            .then(response=>{
                updateProducts(response.data);
            })
            .catch(error=>{
                console.log(`Error Occured ${error}`);
            }); 
         
    }, []);
     const router = useRouter();

    const remove=(id)=>{
        service.deleteData(id).then(response=>{
           window.location.reload();
        })
        .catch(error=>{
            console.log(`Error Occured ${error}`);
        }); 
    }

    if(products.length >0 ){
    return (
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                    {
                        Object.keys(products[0]).map((col,idx)=> (
                            <th key={idx}>{col}</th>
                        ))
                    }
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                 {
                     products.map((prd,index)=>(
                         <tr key={index}>
                          {
                            Object.keys(prd).map((col,idx)=> (
                                <td key={idx}>{prd[col]}</td>
                            ))
                            
                          }
                          <td>
                           <button className="btn btn-warning">
                                    <Link href={`/EditProductComponent?${prd.ProductRowId}`} >Edit</Link>
                                     
                           </button>
                           
                          </td>
                          <td>
                             <input type="button" className="btn btn-danger" value="Delete"
                              onClick={()=>{remove(prd.ProductRowId)}}/>
                          </td>
                         </tr>
                     ))
                 }
            </tbody>
        </table>
                 
        )  } else {
            return (
                <div>No Record Found</div>
            )
        }
    
};

export default ProductListComponent;
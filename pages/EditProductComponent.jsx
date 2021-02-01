import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {HttpService} from './api/httpservice';

const EditProductComponent=(props)=> {
    const service = new HttpService();
    const categories =['Electronics', 'Electrical', 'Food'];
    const manufacturers = ['MSIT', 'TSFOODS', 'LS-Electrical'];
    const [product, updateProduct] = useState({ProductRowId:0, ProductId:'', 
                                               ProductName: '', CategoryName:'',
                                               Manufacturer:'', Description:'', BasePrice:0});

    const router = useRouter();
    const {id} = router.query;                                           
     
    useEffect(()=> {
        let d = router.query;
        alert('d =  ' + d);
        const id = router.query;
        service.getDataById(id).then(response=> {
            updateProduct(response.data);
        }).catch(error=>{
            console.log(`Error Occured ${error}`);
        }); 
    },[]);
    
      const save=()=>{
        service.putData(product).then(response=>{
            updateProduct(response.data);
            props.history.push('/');
        })
        .catch(error=>{
            console.log(`Error Occured ${error}`);
        }); 
    }
    
    const clear=()=>(
        updateProduct({ProductRowId:0, ProductId:'', 
        ProductName: '', CategoryName:'',
        Manufacturer:'', Description:'', BasePrice:0})
    );

  
  return (
    <div className="container">
                    <h2>Edit the Product</h2>
                    <div className="form-group">
                        <label>Product Row Id</label>
                        <input type="text" className="form-control" value={product.ProductRowId} readOnly/>
                    </div>
                    <div className="form-group">
                        <label>Product Id</label>
                        <input type="text" className="form-control" value={product.ProductId}
                         onChange={(evt)=>{updateProduct({...product, ProductId:evt.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" className="form-control" value={product.ProductName}
                        onChange={(evt)=>{updateProduct({...product, ProductName:evt.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label>Category Name</label>
                        
                        <select type="text" className="form-control" 
                        name="CategoryName" value={product.CategoryName}
                        onChange={(evt)=>{updateProduct({...product, CategoryName:evt.target.value})}}>
                               <option>Select Category Name</option>
                            {
                               categories.map((v,i)=> (
                                <option key={i} value={v}>{v}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Manufacturer</label>
                        <select type="text" className="form-control"
                        value={product.Manufacturer}
                        onChange={(evt)=>{
                            updateProduct({...product, Manufacturer:evt.target.value});
                        }}
                        >
                        <option>Select Manufacturer</option>
                            {
                                manufacturers.map((v,i)=> (
                                <option key={i} value={v}>{v}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" className="form-control" value={product.Description}
                        onChange={(evt)=>{updateProduct({...product, Description:evt.target.value})}}/>
                    </div>
                    <div className="form-group">
                        <label>Base Price</label>
                        <input type="text" className="form-control" value={product.BasePrice}
                         onChange={(evt)=>{updateProduct({...product, BasePrice:parseInt(evt.target.value)})}}/>
                    </div>
                    <div className="form-group">
                        <input type="button" value="Clear" className="btn btn-warning" onClick={clear}/>
                        <input type="button" value="Save" className="btn btn-success" onClick={save}/>
                    </div>
                   <hr/>
                   <Link href="/">Back to List</Link>   

</div>       
  );
}

export default EditProductComponent;
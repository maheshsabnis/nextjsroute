import {HttpService} from './api/httpservice';
const Products=({prods})=>{
    return(
        <ul>
            {
                prods.map((prds,idx)=>(
                    <li key={idx}>
                        {
                            prds.ProductName
                        }
                    </li>
                ))
            }
        </ul>
    );    
}
// pre-rendering from server-side
// required server to provide the AJAX Calls 
// with data, use 'getStaticProsp()' method
// to received the data
// use the 'async' function modifier from ES 7
// to wait for asyncronous call to complete 
// and provide the data

export async function getStaticProps(){
    console.log(`In Get Static Props`);
    const serv= new HttpService();
    // call the external method
    // await is the statement modifier
    // to subscribe to the method returning
    // promise object and resolve it 
    const result = await serv.getData();
    const prods = await result.data;
    console.log(`Receive Data ${prods}`);
    // rerurn the received response
    return {
        props: {
            prods
        }
    }
}

export default Products;
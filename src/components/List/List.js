import React from "react";
import './List.css';
import { API_URL } from '../../config';
import Loading from '../common/Loading';
import Pagination from '../List/Pagination'
 // import { isFlowBaseAnnotation } from "@babel/types";
class List extends React.Component {
    constructor(){
        super();
        this.state={
          loading:false,
          currencies:[],
          error:null, 
          totalPages:0,
          page:1,
          //  count:0


        }
      }
      handleIncrement =() => {
        this.setState({ page: this.state.page + 1 });
      };
      Decreaseitem = () => {
        this.setState({ page: this.state.page - 1 });
      };
     
      componentDidMount(){
        this.setState({
          loading: true
        })

          fetch(`${API_URL}/cryptocurrencies?page=page:1&perPage=20`)
          .then((response) =>{
            return response.json().then((data)=>{
            return response.ok ? data:Promise.reject(data)    
            })
          })
          .then((data) => {
            this.setState({
              loading: false,
              currencies: data.currencies,
              totalPages:data.totalPages,
             
            })
            // console.log(data)
          })

          .catch(() => {
            this.setState({
              loading: false
            })
          })
    
      }
      handleChangePercent = percent => {
         if(percent > 0){
           return <span className="percent-raised">&uarr; {percent}</span>
           
         }else if(percent < 0) {
            return <span className="percent-fallen">&darr; {percent}</span>
         }else{
           return <span >{percent}</span>
         }
         
      }

        render () {
           console.log(this.state)
           const {loading, currencies, error,page,totalPages, handleIncrement,Decreaseitem } = this.state;
          
            
           if(loading){
             return (
               <div className="loading-container">
                 <Loading />
               </div>
             )
           }
          return (
            <div className="Table-container">
              <table className="Table">
                  <thead className="Table-head">
                    
                      <tr>
                        <th>Cryptocurrency</th>
                        <th>Price</th>
                        <th>Market Cap</th>
                        <th>24H Change</th>
                      </tr>
                  </thead>
                      <tbody className="Table-body">
                          {
                            currencies.map((currency) => {
                               console.log(currency)
                               return (
                                  <tr>
                                    <td>
                                        <span className="Table-rank">{currency.rank}</span>
                                        <span>{currency.name}</span>
                                        
                                    </td>

                                      <td>
                                        <span className="Table-dollar">$</span>
                                        <span>{currency.price}</span>
                                      </td>

                                      <td>
                                        <span className="Table-dollar">$</span>
                                        <span>{currency.marketCap}</span>
                                      </td>
                                      
                                      <td>
                                         {this.handleChangePercent(currency.percentChange24h)}
                                      </td>

                                  </tr>
                                )
                            })
                          }
                      </tbody>
              </table> 
              <Pagination
              page={page}
              totalPages={totalPages}
              // handlePaginationClick={this.handlePaginationClick}
              handleIncrement={this.handleIncrement}
              Decreaseitem={this.Decreaseitem}
              
              />
            </div>
          )
        }
      
}

export default List

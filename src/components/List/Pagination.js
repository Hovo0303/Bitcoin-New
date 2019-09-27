import React from 'react';
import './Pagination.css';
const Pagination = (props) =>{
    const {page,totalPages,handlePaginationClick,handleIncrement,Decreaseitem}=props
return(
    <div className="Pagination">
        <button className="Pagination-button" onClick={Decreaseitem}>&larr;</button>
        <span className="Pagination-info">
            Pag <b>{page}</b> of <b>{totalPages}</b>
        </span>
        <button className="Pagination-button" onClick={handleIncrement} >&rarr;</button>

    </div>
)
}
export default Pagination
// import React from 'react';
// import './Pagination.css';
// const Pagination = (props) =>{
//     const {page,totalPages,handlePaginationClick}=props
// return(
//     <div className="Pagination">
//         <button className="Pagination-button" onClick={() =>this.props.onIncrement(this.props.count)}>&larr;</button>
//         <span className="Pagination-info">
//             Pag <b>{page}</b> of <b>{totalPages}</b>
//         </span>
//         <button className="Pagination-button" >&rarr;</button>

//     </div>
// )
// }
// export default Pagination
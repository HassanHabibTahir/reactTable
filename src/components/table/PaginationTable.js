import React, { useMemo } from 'react'

import { useTable ,usePagination} from 'react-table'
import MOCK_DATA from "./MOCK_DATA.json"
import { COLUMNS ,GROUPED_COLUMNS } from "./column";
import '../css/index.css';
 
export const PaginationTable = () => {
    const columns = useMemo(() => GROUPED_COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      page,
  
      nextPage,
      previousPage,
      canPreviousPage,
      canNextPage,
      pageOptions,
      state,
      gotoPage,
      pageCount,
      setPageSize,

    //   rows,
      prepareRow,
    
    } = useTable({
      columns,
      data,
      initialState:{pageIndex:2}
    },
    usePagination  
    )
  
const {pageIndex ,pageSize } =state

    return (
      <>

        <table {...getTableProps()}  id="customers">
          <thead>
            {headerGroups.map(headerGroup => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  })}
                </tr>
              )
            })}
          </tbody>
          {/* <tfoot>
            {footerGroups.map(footerGroup => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map(column => (
                  <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                ))}
              </tr>
            ))}
          </tfoot> */}
        </table>
        <div>

<span>
    Page:{" "}
    <strong>
        {pageIndex+1} of {pageOptions.tength}
    </strong>{' '}
</span>

<span>
    |Go to  page:{' '}
    <input type="number"  defaultValue={pageIndex+1} 
    onChange={e=>{
        const pageNumber = e.target.value? Number(e.target.value)-1:0;
        gotoPage(pageNumber)
    }}
    
    />
</span>

<span>
<select

value={pageSize}
onChange={(e)=>setPageSize(Number(e.target.value))}
>

{[10,25, 50].map((pageSize)=>(
    <option key={pageSize} value={pageSize}>

   show {pageSize}
    </option>
))}

</select>

</span>

             <button onClick={()=>gotoPage(0)} disabled={!canPreviousPage} >{'<<'}</button>
            <button  onClick={()=>previousPage()}  disabled={!canPreviousPage}>Previous</button>
            <button  onClick={()=>{nextPage()}}  disabled={!canNextPage} >Next</button>

            <button onClick={()=>gotoPage(pageCount-1)} disabled={!canNextPage} >{'>>'}</button>

        </div>
      </>
    )
  }

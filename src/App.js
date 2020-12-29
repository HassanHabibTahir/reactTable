import logo from './logo.svg';
import './components/css/index.css';
import { BasicTable } from './components/table/basicTable';
import { SortingTable } from './components/table/sortingTable';
import { FilteringTable } from './components/table/FilteringTable';
import { PaginationTable } from './components/table/PaginationTable';
import { RowSelection } from './components/table/RowSelection';


function App() {
  return (
    <div >
      
      <PaginationTable/>
    </div>
  );
}

export default App;

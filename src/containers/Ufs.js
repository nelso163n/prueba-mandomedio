import React, { useState, useEffect} from "react";

import { getUfsByMonth } from "../services/uf";
import Filters from "../components/Filters";


const Ufs = () => {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [data, setData] = useState([]);
  
  const onChangeDateFrom = async (event) => {
    var fromDate = new Date(event);
    setDateFrom(event);
    const year = fromDate.getFullYear();
    const month = fromDate.getMonth();
    const result = await getUfsByMonth(year, month);
    setData(result);
    console.log("result", result); 
  }

  return(
    <div>
      <Filters 
        onChangeDateFrom={onChangeDateFrom}
        dateFrom={dateFrom}
      />
    </div>
  );
}

export default Ufs;
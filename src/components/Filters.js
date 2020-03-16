import React from "react";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

const Filters = ({dateFrom, onChangeDateFrom}) => {
  return(
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          variant="inline"
          openTo="year"
          views={["year", "month"]}
          label="Año y Mes"
          helperText="Mes para consultar UF"
          value={dateFrom}
          onChange={onChangeDateFrom}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default Filters;

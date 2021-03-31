import React, { forwardRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import ptBR from 'date-fns/locale/pt-BR';

import './DatePicker.css';
import { MdDateRange } from 'react-icons/md';

registerLocale('pt-BR', ptBR);

// import { Container } from './styles';

function AppDatePicker(props) {
  const ExampleCustomInput = forwardRef((oioi, ref) => {
    console.log(oioi);
    
    return (
      <div className="input-calendar">
        <input className="example-custom-input" onClick={oioi.onClick} ref={ref} defaultValue={oioi.value} />
        <MdDateRange size={20} />
      </div>
    );
  });

  return <DatePicker customInput={<ExampleCustomInput />} locale="pt-BR" {...props} />;
}

export default AppDatePicker;

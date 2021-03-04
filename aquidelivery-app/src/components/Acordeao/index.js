import React from 'react';
import './styles.css';

import Plus from './../../assets/icons/Plus';
import Minus from './../../assets/icons/Minus';

import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

const Accordion = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: 'var(--alabastrino)',
    minHeight: 32,
    '&$expanded': {
      minHeight: 32,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

function Acordeao({ className = '', titulo, children }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div className={`acordeao ${className}`}>
      <Accordion
        square
        expanded={expanded === 'panel'}
        onChange={handleChange('panel')}
        style={{ border: '1px solid var(--niveo)' }}>
        
        <AccordionSummary className="acordeao-sumario">
          <Typography>
            {titulo}
          </Typography>

          {expanded === 'panel' ? <Minus /> : <Plus />}
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
    // <div className="sanfona">
    //   <div className="sanfona-cabecalho noselect" onClick={() => setExpandido(!expandido)}>
    //     <span>{titulo}</span>
    //     {expandido? <Minus /> : <Add />}
    //   </div>

    //   {/* adicionar transicao */}
    //   <div className="sanfona-corpo" style={{
    //     width: expandido ? 'auto' : '0px',
    //     display: expandido ? 'flex' : 'none',
    //   }}>
    //     {children}
    //   </div>
    // </div>
  );
}

export default Acordeao;
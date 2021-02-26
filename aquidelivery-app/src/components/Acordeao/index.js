import React from 'react';
import './styles.css';

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
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
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

function Acordeao({ titulo, children }) {
  const [expanded, setExpanded] = React.useState('panel');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  
  return (
    <div className="acordeao">
      <Accordion square expanded={expanded === 'panel'} onChange={handleChange('panel')}>
        <AccordionSummary className="acordeao-sumario">
          <Typography>
            {titulo}
          </Typography>
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
import React from "react";
import style from "./FAQs.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import icon from "../../Assets/PlusIcon.png";
function FAQs() {
  return (
    <div className={style.faqs}>
      <div className={style.left}>
        <h2>FAQS</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={style.accordion}>
        <Accordion className={style.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.ExpandMoreIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={style.typo}>
              Do I need a personal injury report?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.typo1}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.ExpandMoreIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={style.typo}>
              How much is my case worth?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.typo1}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.ExpandMoreIcon} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={style.typo}>
              What should I do right after car accidect
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.typo1}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion className={style.accord}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon className={style.ExpandMoreIcon} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={style.typo}>
              How much is my case worth?{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography className={style.typo1}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequatduis enim velit mollit Exer.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQs;

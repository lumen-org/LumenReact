import React from "react";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import EnumHandler from "../EnumHandler";

const SubSettingsGenerator = (props) => {
    const { title, settings } = props.settings
    const { updateSetting } = props
    return <div>
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2a-content"
                id="panel2a-header"
            >
                <Typography className="">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {Object.keys(settings).map(
                    (key) => {
                        const { name, type, value } = settings[key]
                        return (
                            (type === "enum") ?
                                (
                                    <EnumHandler
                                    name={name}
                                    extend={settings[key].extend} 
                                    defaultValue={value}
                                    valueKey={key}
                                    updateFunction={updateSetting}
                                     />
                                ) : null
                        )
                    }
                )}
            </AccordionDetails>
        </Accordion>
    </div>
}

export default SubSettingsGenerator;
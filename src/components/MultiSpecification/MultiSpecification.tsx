import React, { Component } from "react";
import TitelH1 from "../Titles/TitleH1";
import TitelH2 from "../Titles/TitleH2";
import Field from "../Field";

type MultiSpecificationProps = {
    specifications: object
}

const MultiSpecification = (props: MultiSpecificationProps) => {
    const { specifications } = props;
    return (
        <div className="specification">
            <TitelH1 value={"Specification"} />
            {Object.entries(specifications).map((item, index) => (
                <Field
                    title={item[0]}
                    data={item[1]}
                    dropable={true}
                />
            ))}
            <TitelH2 value={"Drop here to remove"} />
        </div>
    );
}

export default MultiSpecification
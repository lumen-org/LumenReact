import React, {Component} from "react";
import TitelH1 from "../../components/Titles/TitelH1";
import Field from "../../components/Fields/Field";
import TitelH2 from "../../components/Titles/TitleH2";

class Schema extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datalist1: [1,3, 2,3,4,5,6,9],
      dataList2: [3,4,5,6,87,1,10]
    }
  }
  render() {
    return (
        <div className="Schema">
          <TitelH1 value={"Schema"}/>
          <Field title={"Quantitative"} data={this.state.datalist1}/>
          <Field title={"Categorical"} data={this.state.dataList2}/>
          <TitelH2 value={"Drop here to remove"} />
        </div>
    );
  }
}

export default Schema;

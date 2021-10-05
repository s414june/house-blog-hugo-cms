import React from "react";
import format from "date-fns/format";

export default class PostPreview extends React.Component {
    render() {
            const { entry, widgetFor, getAsset } = this.props;
            let image = getAsset(entry.getIn(["data", "image"]));

            return <div className = "mw6 center ph3 pv4" >
                <h1 className = "f2 lh-title b mb3" > { entry.getIn(["data", "title"]) } </h1> <div className = "flex justify-between grey-3" >
                <ul class="list-inline d-flex justify-content-between py-3">
                  <li class="list-inline-item">發文者： 邱建奕</li>
                  <li class="list-inline-item">{ format(entry.getIn(["data", "date"]), "YYYY/MMM/D") }</li>
                </ul>
                <p> { format(entry.getIn(["data", "date"]), "ddd, MMM D, YYYY") } </p> { /* <p > Read in x minutes < /p>  */ } </div>
                <div className="cms mw6">
                        {/* <p>{ entry.getIn(["data", "description"]) }</p> */}
                        { image && <img src={ image } alt={ entry.getIn(["data", "title"])} /> }
                        { widgetFor("body") }
                      </div>  </div>;
}
}
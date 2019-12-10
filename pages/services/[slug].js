import React from "react";
import { withRouter } from "next/router";

import Services from "../services";

const AssetFetch = props => {
  return <Services {...props} />;
};

export default withRouter(AssetFetch);

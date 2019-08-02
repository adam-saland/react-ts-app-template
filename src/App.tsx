import React from "react";
import resetCss from "./resetCss";
import Page from "./Page";
import Title from "./Title";
import SubTitle from "./SubTitle";

resetCss();

const App = () => (
  <Page>
    <Title>yourTitleHere</Title>
    <SubTitle></SubTitle>
  </Page>
);

export default App;

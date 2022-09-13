import React, { useState } from 'react'
import Navbar from './News/Navbar'
import News from './News/News'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import LoadingBar from "react-top-loading-bar"

const NewsApp = ()=>{
  const pageSize = 6
  const apiKey= "5412c79756b74216a8f89453dc4e77d1"

  const [progressBar, setProgressBar] = useState(0)
  const setProgress = (progress)=>{
    setProgressBar(progress)
  }
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progressBar}
          />
          <Switch>
            <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="newsmonkey" pageSize={pageSize} country="us" category="general" heading="" /></Route>
            <Route exact path="/top-headlines"><News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country="us" category="general" heading=" - Top HeadLines" /></Route>
            <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" heading=" - Top Entertainment Headlines" /></Route>
            <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country="us" category="health" heading=" - Top Health Headlines" /></Route>
            <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country="us" category="science" heading=" - Top Science Headlines" /></Route>
            <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country="us" category="sports" heading=" - Top Sports Headlines" /></Route>
            <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country="us" category="technology" heading=" - Top Technology Headlines" /></Route>
          </Switch>
        </Router>
      </>
    )
}

export default NewsApp

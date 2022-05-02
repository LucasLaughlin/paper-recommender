/* React & Packages */
import React, { useState, useEffect } from 'react';

/*  Material UI */
import Box from '@material-ui/core/Box';

/*  Components */
import Spinner from './Components/Animations/Spinner';
import DocumentTable from './Components/Tables/DocumentTable';
import RecommendedTable from './Components/Tables/RecommendedTable';
import Save from './Components/ToolBar/Save';
import { Typography } from '@material-ui/core';

/* Api */
import FlaskApi from './api/flask.api'
// =================================================================================================

function Home(props) {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([])
  
  useEffect(() => {
    setLoading(false)
  }, [])
  
  const listPapers = async (search, skip, limit) => (FlaskApi.list(search, skip, limit));
  
  const listRecommendations = async (selected, skip, limit) => {
    console.log(selected);
    let recs = await FlaskApi.recommendations(selected, skip, limit);
    console.log("Back to Home.js")
    console.log(recs)
    setRecommendations(recs.documents);
  };
  
  const selectedActions = (selectedArr) => ([
    <Save selectedArr={selectedArr} />
  ]);

  return (
    <Box display="flex" flexDirection="column" flexGrow={1}>
      {loading
        ? (<Spinner />)
        : (
          <Box display="flex" flexDirection="column">
            {
              <>
              <DocumentTable
                    list={listPapers}
                    listRecommendations={listRecommendations}
                    triggerList={[]}
                    selectedActions={selectedActions}
                  />
              {<RecommendedTable
                    triggerList={[]}
                    selectedActions={selectedActions}
                    recommendations={recommendations}
                  />}
                  </>}
          </Box>
        )}
    </Box>
  );
};

export default Home;
